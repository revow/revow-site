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
    { role: "ai", text: "Conversion from Qualified → Converted fell 4.2pp. Two root causes detected:", list: [
      "Lead quality score dropped 22% — new campaign is driving volume but not fit",
      "Response time in Stage 2 increased from 2.1h to 4.8h — 3 reps over capacity"
    ]},
    { role: "ai", text: "Recommended actions:", list: [
      "Review campaign targeting — CPL is 40% below threshold",
      "Redistribute Stage 2 queue and set alert for response time > 3h"
    ]},
  ],
  pt: [
    { role: "user", text: "Por que a conversão caiu esta semana?" },
    { role: "ai", text: "Conversão de Qualificados → Convertidos caiu 4.2pp. Duas causas detectadas:", list: [
      "Score de qualidade caiu 22% — campanha nova gera volume mas sem fit",
      "Tempo de resposta no Estágio 2 subiu de 2.1h para 4.8h — 3 reps sobrecarregados"
    ]},
    { role: "ai", text: "Ações recomendadas:", list: [
      "Revisar targeting da campanha — CPL 40% abaixo do threshold",
      "Redistribuir fila do Estágio 2 e criar alerta para tempo > 3h"
    ]},
  ],
  es: [
    { role: "user", text: "¿Por qué cayó la conversión esta semana?" },
    { role: "ai", text: "Conversión de Calificados → Convertidos cayó 4.2pp. Dos causas detectadas:", list: [
      "Score de calidad bajó 22% — campaña nueva genera volumen pero sin fit",
      "Tiempo de respuesta en Etapa 2 subió de 2.1h a 4.8h — 3 reps sobrecargados"
    ]},
    { role: "ai", text: "Acciones recomendadas:", list: [
      "Revisar targeting de campaña — CPL 40% bajo el umbral",
      "Redistribuir cola de Etapa 2 y crear alerta para tiempo > 3h"
    ]},
  ],
};

export default function SimCopilot({ labels, locale }: SimCopilotProps) {
  const messages = conversations[locale] ?? conversations.en;

  return (
    <div className="sim-card p-6 space-y-3">
      <div>
        <p className="text-[10px] text-text-muted uppercase tracking-widest font-medium">{labels.label}</p>
        <h3 className="text-base font-semibold text-text-primary mt-0.5">{labels.title}</h3>
      </div>
      <div className="space-y-2.5">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[88%] rounded-2xl px-4 py-2.5 ${m.role === "user" ? "bg-accent/10 text-text-primary border border-accent/15" : "bg-bg-secondary border border-border"}`}>
              {m.role === "ai" && <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Revow AI</span>}
              <p className="text-sm text-text-secondary mt-0.5 leading-relaxed">{m.text}</p>
              {m.list && (
                <ul className="mt-1.5 space-y-1">
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
      <div className="rounded-xl border border-border bg-bg-secondary px-4 py-2.5 flex items-center gap-3">
        <span className="text-text-muted text-sm">{labels.placeholder}</span>
        <span className="ml-auto text-accent/50 text-xs font-mono">⌘K</span>
      </div>
    </div>
  );
}
