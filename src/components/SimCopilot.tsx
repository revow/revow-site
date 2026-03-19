"use client";

interface SimCopilotProps {
  labels: {
    label: string;
    title: string;
    placeholder: string;
  };
  locale: string;
}

const conversations: Record<string, { role: string; text: string; list?: string[] }[]> = {
  en: [
    { role: "user", text: "Why did conversion drop this week?" },
    { role: "ai", text: "Conversion from Qualified → Converted fell 4.2pp this week. Three factors detected:", list: [
      "Lead volume increased 22% but quality score dropped — likely due to the new campaign launched Monday",
      "Response time in Stage 2 increased from 2.1h to 4.8h average",
      "Bottleneck identified: 68% of delayed leads are stuck with the same 3 reps"
    ]},
    { role: "ai", text: "Recommended actions:", list: [
      "Review campaign targeting criteria — current CPL is 40% below threshold",
      "Redistribute Stage 2 queue — 3 reps are over capacity",
      "Set up alert for response time > 3h"
    ]},
  ],
  pt: [
    { role: "user", text: "Por que a conversão caiu esta semana?" },
    { role: "ai", text: "A conversão de Qualificados → Convertidos caiu 4.2pp esta semana. Três fatores detectados:", list: [
      "Volume de leads aumentou 22% mas o score de qualidade caiu — provavelmente pela nova campanha lançada segunda-feira",
      "Tempo de resposta no Estágio 2 aumentou de 2.1h para 4.8h em média",
      "Gargalo identificado: 68% dos leads atrasados estão com os mesmos 3 representantes"
    ]},
    { role: "ai", text: "Ações recomendadas:", list: [
      "Revisar critérios de targeting da campanha — CPL atual está 40% abaixo do threshold",
      "Redistribuir fila do Estágio 2 — 3 reps estão acima da capacidade",
      "Configurar alerta para tempo de resposta > 3h"
    ]},
  ],
  es: [
    { role: "user", text: "¿Por qué cayó la conversión esta semana?" },
    { role: "ai", text: "La conversión de Calificados → Convertidos cayó 4.2pp esta semana. Tres factores detectados:", list: [
      "El volumen de leads aumentó 22% pero el score de calidad bajó — probablemente por la nueva campaña lanzada el lunes",
      "El tiempo de respuesta en la Etapa 2 aumentó de 2.1h a 4.8h en promedio",
      "Cuello de botella identificado: 68% de los leads retrasados están con los mismos 3 representantes"
    ]},
    { role: "ai", text: "Acciones recomendadas:", list: [
      "Revisar criterios de targeting de la campaña — CPL actual está 40% por debajo del umbral",
      "Redistribuir cola de la Etapa 2 — 3 reps están por encima de la capacidad",
      "Configurar alerta para tiempo de respuesta > 3h"
    ]},
  ],
};

export default function SimCopilot({ labels, locale }: SimCopilotProps) {
  const messages = conversations[locale] ?? conversations.en;

  return (
    <div className="sim-card p-6 space-y-4">
      <div>
        <p className="text-[10px] text-text-muted uppercase tracking-widest font-medium">{labels.label}</p>
        <h3 className="text-base font-semibold text-text-primary mt-0.5">{labels.title}</h3>
      </div>
      <div className="space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[88%] rounded-2xl px-4 py-3 ${m.role === "user" ? "bg-accent/10 text-text-primary border border-accent/15" : "bg-bg-secondary border border-border"}`}>
              {m.role === "ai" && <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Revow AI</span>}
              <p className="text-sm text-text-secondary mt-1 leading-relaxed">{m.text}</p>
              {m.list && (
                <ul className="mt-2 space-y-1.5">
                  {m.list.map((item, j) => (
                    <li key={j} className="text-sm text-text-secondary flex gap-2">
                      <span className="text-accent shrink-0 mt-0.5 font-bold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-border bg-bg-secondary px-4 py-3 flex items-center gap-3">
        <span className="text-text-muted text-sm">{labels.placeholder}</span>
        <span className="ml-auto text-accent/50 text-xs font-mono">⌘K</span>
      </div>
    </div>
  );
}
