import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  name: string;
  email: string;
  company: string;
  role?: string;
  phone?: string;
  source?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadPayload = await request.json();

    if (!body.name || !body.email || !body.company) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, company" },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const hubspotToken = process.env.HUBSPOT_TOKEN;

    if (hubspotToken) {
      const hubspotRes = await fetch(
        "https://api.hubapi.com/crm/v3/objects/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${hubspotToken}`,
          },
          body: JSON.stringify({
            properties: {
              firstname: body.name.split(" ")[0],
              lastname: body.name.split(" ").slice(1).join(" ") || "",
              email: body.email,
              company: body.company,
              jobtitle: body.role || "",
              phone: body.phone || "",
              hs_lead_status: "NEW",
              lifecyclestage: "lead",
            },
          }),
        }
      );

      if (!hubspotRes.ok) {
        const err = await hubspotRes.json().catch(() => ({}));
        console.error("HubSpot API error:", err);
        // If contact already exists (409), that's OK
        if (hubspotRes.status !== 409) {
          return NextResponse.json(
            { error: "Failed to save contact" },
            { status: 500 }
          );
        }
      }
    } else {
      console.log("[Lead captured]", {
        name: body.name,
        email: body.email,
        company: body.company,
        role: body.role,
        source: body.source,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
