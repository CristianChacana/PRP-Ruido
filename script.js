// ============================================================================
// BANCO DE 15 PREGUNTAS BASADAS EN EL RESUMEN DE 2 PÁGINAS (ISP / D.S. 594 / PREXOR)
// Cada pregunta tiene 5 alternativas, imagen SVG orientativa (que no regala la respuesta),
// soporte para selección única o múltiple, y explicación normativa detallada.
// ============================================================================

const QUESTIONS = [
  {
    id: 1,
    multiple: false,
    question: "Según el Decreto Supremo N° 594 vigente en Chile, ¿cuál es el Límite Máximo Permisible (LMP) de exposición ocupacional a ruido estable o fluctuante para una jornada laboral habitual de 8 horas diarias?",
    caption: "Ilustración guía: Jornada laboral de 8 horas continuas y medidor de nivel sonoro ambiental.",
    svg: `
      <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" rx="12" fill="#0f172a"/>
        <!-- Reloj de 8 horas -->
        <circle cx="95" cy="100" r="52" fill="#1e293b" stroke="#38bdf8" stroke-width="4"/>
        <path d="M95 100 L95 62 M95 100 L126 115" stroke="#f8fafc" stroke-width="4" stroke-linecap="round"/>
        <text x="95" y="172" text-anchor="middle" fill="#94a3b8" font-size="13" font-weight="700">JORNADA 8 HORAS</text>
        <!-- Ondas hacia oído -->
        <path d="M170 75 Q190 100 170 125" fill="none" stroke="#f59e0b" stroke-width="3"/>
        <path d="M190 62 Q218 100 190 138" fill="none" stroke="#ef4444" stroke-width="3"/>
        <!-- Caja medidora sin revelar número -->
        <rect x="220" y="60" width="75" height="80" rx="10" fill="#1e293b" stroke="#22c55e" stroke-width="3"/>
        <text x="257" y="96" text-anchor="middle" fill="#22c55e" font-size="16" font-weight="800">LMP</text>
        <text x="257" y="118" text-anchor="middle" fill="#cbd5e1" font-size="12" font-weight="700">dB(A) Lento</text>
      </svg>
    `,
    options: [
      "80 dB(A) Lento",
      "82 dB(A) Lento",
      "85 dB(A) Lento",
      "88 dB(A) Lento",
      "90 dB(A) Lento"
    ],
    correct: [2],
    explanation: "De acuerdo con el D.S. N° 594 (Art. 74), para una jornada de 8 horas diarias ningún trabajador podrá estar expuesto a un Nivel de Presión Sonora Continuo Equivalente (NPSeq) superior a 85 dB(A) lento (100% de la Dosis Diaria)."
  },
  {
    id: 2,
    multiple: false,
    question: "En la normativa chilena (D.S. N° 594 e instructivos del ISP), ¿cuál es la tasa de intercambio (q) y cuántas horas máximas puede exponerse un trabajador sin protección si el nivel sube a 88 dB(A) lento?",
    caption: "Ilustración guía: Balanza energética donde un pequeño incremento en dB duplica la energía acústica y reduce el tiempo a la mitad.",
    svg: `
      <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" rx="12" fill="#0f172a"/>
        <!-- Balanza energética -->
        <line x1="60" y1="155" x2="260" y2="155" stroke="#475569" stroke-width="4"/>
        <polygon points="160,115 142,155 178,155" fill="#38bdf8"/>
        <line x1="75" y1="130" x2="245" y2="95" stroke="#f8fafc" stroke-width="4"/>
        <!-- Lado izquierdo: más dB -->
        <rect x="45" y="95" width="75" height="36" rx="6" fill="#ef4444"/>
        <text x="82" y="118" text-anchor="middle" fill="#fff" font-size="13" font-weight="800">+ Δ dB(A)</text>
        <!-- Lado derecho: mitad de tiempo -->
        <rect x="200" y="58" width="85" height="36" rx="6" fill="#22c55e"/>
        <text x="242" y="81" text-anchor="middle" fill="#052e16" font-size="13" font-weight="800">1/2 Tiempo</text>
      </svg>
    `,
    options: [
      "Tasa de 5 dB; tiempo máximo permitido de 6 horas",
      "Tasa de 3 dB; tiempo máximo permitido de 4 horas",
      "Tasa de 3 dB; tiempo máximo permitido de 2 horas",
      "Tasa de 5 dB; tiempo máximo permitido de 4 horas",
      "Tasa de 2 dB; tiempo máximo permitido de 4 horas"
    ],
    correct: [1],
    explanation: "Chile aplica una tasa de intercambio de q = 3 dB. Como 85 dB(A) permite 8 horas, al subir 3 dB hasta 88 dB(A) se duplica la energía acústica y el tiempo máximo permitido se reduce a la mitad: 4 horas."
  },
  {
    id: 3,
    multiple: true,
    question: "[SELECCIÓN MÚLTIPLE] Según el Protocolo PREXOR (MINSAL / ISP), ¿cuáles de las siguientes condiciones activan el Criterio de Acción preventivo que obliga a implementar medidas de control e ingresar al trabajador a vigilancia?",
    caption: "Ilustración guía: Tres indicadores de alerta temprana que se activan al 50% de la energía límite o ante impactos agudos.",
    svg: `
      <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" rx="12" fill="#0f172a"/>
        <!-- Semáforo preventivo -->
        <rect x="35" y="45" width="70" height="110" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="3"/>
        <circle cx="70" cy="75" r="14" fill="#334155"/>
        <circle cx="70" cy="105" r="14" fill="#f59e0b"/>
        <circle cx="70" cy="135" r="14" fill="#334155"/>
        <!-- 3 Tarjetas de criterio -->
        <rect x="130" y="42" width="155" height="32" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="207" y="63" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="700">1. Dosis Diaria Preventiva</text>
        <rect x="130" y="84" width="155" height="32" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="207" y="105" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="700">2. NPSeq (Jornada 8h)</text>
        <rect x="130" y="126" width="155" height="32" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="207" y="147" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="700">3. Umbral Peak Impulsivo</text>
      </svg>
    `,
    options: [
      "Dosis de Ruido Diaria (DRD) igual o superior a 0,5 (50%)",
      "NPSeq igual o superior a 82 dB(A) para una jornada de 8 horas",
      "Nivel de presión sonora impulsivo igual o superior a 135 dB(C) Peak",
      "NPSeq igual a 70 dB(A) durante 4 horas de trabajo administrativo",
      "Nivel de presión sonora impulsivo recién a partir de 160 dB(A) Lento"
    ],
    correct: [0, 1, 2],
    explanation: "El Criterio de Acción de PREXOR se activa ante cualquiera de estas 3 condiciones: Dosis de Ruido Diaria ≥ 50% (0,5), NPSeq ≥ 82 dB(A) para 8 horas, o Ruido Impulsivo ≥ 135 dB(C) Peak."
  },
  {
    id: 4,
    multiple: false,
    question: "De acuerdo con el D.S. N° 594, ¿cómo se clasifica un ruido que presenta fluctuaciones del nivel de presión sonora instantáneo inferiores o iguales a 5 dB(A) lento durante un período de observación de 1 minuto?",
    caption: "Ilustración guía: Gráfico temporal de 60 segundos donde la oscilación de la onda se mantiene dentro de una franja estrecha y constante.",
    svg: `
      <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" rx="12" fill="#0f172a"/>
        <!-- Ejes -->
        <line x1="45" y1="35" x2="45" y2="160" stroke="#94a3b8" stroke-width="2"/>
        <line x1="45" y1="160" x2="290" y2="160" stroke="#94a3b8" stroke-width="2"/>
        <!-- Franja estrecha -->
        <rect x="46" y="80" width="240" height="32" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-dasharray="4 4"/>
        <!-- Onda casi plana -->
        <path d="M46 96 Q70 86 95 97 T145 94 T195 98 T245 93 T285 96" fill="none" stroke="#22c55e" stroke-width="3.5"/>
        <text x="165" y="182" text-anchor="middle" fill="#cbd5e1" font-size="12" font-weight="600">Tiempo de observación: 1 minuto (Δ ≤ 5 dB)</text>
      </svg>
    `,
    options: [
      "Ruido Fluctuante",
      "Ruido Impulsivo",
      "Ruido Estable",
      "Ruido Ultrasónico",
      "Ruido de Impacto Reverberante"
    ],
    correct: [2],
    explanation: "Según el D.S. N° 594 (Art. 71), el Ruido Estable es aquel que presenta fluctuaciones del nivel de presión sonora instantáneo inferiores o iguales a 5 dB(A) lento durante un período de observación de 1 minuto."
  },
  {
    id: 5,
    multiple: false,
    question: "¿Qué instrumento de medición exige la guía del ISP cuando un trabajador se desplaza continuamente por distintas áreas de la planta y realiza tareas móviles con niveles de ruido variables?",
    caption: "Ilustración guía: Trabajador en movimiento por distintas zonas de la planta con un micrófono instalado sobre su hombro.",
    svg: `
      <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" rx="12" fill="#0f172a"/>
        <!-- Silueta trabajador caminando -->
        <circle cx="135" cy="60" r="18" fill="#cbd5e1"/>
        <path d="M110 145 L135 82 L160 145" fill="none" stroke="#cbd5e1" stroke-width="12" stroke-linecap="round"/>
        <!-- Equipo en cinturón y micrófono en hombro -->
        <rect x="144" y="110" width="22" height="28" rx="4" fill="#38bdf8" stroke="#fff" stroke-width="1.5"/>
        <path d="M155 110 Q168 90 148 76" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
        <circle cx="147" cy="75" r="5" fill="#22c55e"/>
        <!-- Flechas de desplazamiento -->
        <path d="M60 165 L260 165" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6 4"/>
        <text x="160" y="186" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="700">Desplazamiento por múltiples áreas</text>
      </svg>
    `,
    options: [
      "Audiómetro tonal de cámara silente",
      "Sonómetro simple de pedestal fijo",
      "Dosímetro personal de ruido",
      "Barómetro diferencial acústico",
      "Calibrador de pistón fijo"
    ],
    correct: [2],
    explanation: "El Instructivo del ISP establece el uso de un Dosímetro Personal de Ruido (con micrófono en el hombro cercano al oído más expuesto) cuando el trabajador se moviliza por diferentes áreas o tiene exposición variable durante la jornada."
  },
  {
    id: 6,
    multiple: false,
    question: "Según el D.S. N° 594, ¿cuál es el nivel techo absoluto para Ruido Impulsivo sobre el cual en ningún caso se permite la exposición de trabajadores sin protección auditiva?",
    caption: "Ilustración guía: Impacto acústico súbito de menos de 1 segundo (martillazo industrial) que genera un pico instantáneo de energía.",
    svg: `
      <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" rx="12" fill="#0f172a"/>
        <!-- Línea base y pulso agudo -->
        <polyline points="30,145 120,145 135,32 150,155 162,120 175,145 290,145" fill="none" stroke="#ef4444" stroke-width="4" stroke-linejoin="round"/>
        <!-- Línea de techo prohibido -->
        <line x1="30" y1="32" x2="290" y2="32" stroke="#facc15" stroke-width="2" stroke-dasharray="6 4"/>
        <text x="215" y="25" fill="#facc15" font-size="12" font-weight="800">TECHO MÁXIMO IMPULSIVO</text>
        <text x="160" y="180" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="600">Impulso &lt; 1 segundo • Ponderación Peak</text>
      </svg>
    `,
    options: [
      "115 dB(A) Lento",
      "120 dB(B) Impulso",
      "130 dB(A) Rápido",
      "135 dB(A) Lento",
      "140 dB(C) Peak"
    ],
    correct: [4],
    explanation: "El D.S. N° 594 establece que en ningún caso se permitirá que trabajadores carentes de protección auditiva personal estén expuestos a niveles de presión sonora Peak superiores a 140 dB(C) Peak (mientras que 135 dB(C) Peak es el Criterio de Acción preventivo de PREXOR)."
  },
  {
    id: 7,
    multiple: true,
    question: "[SELECCIÓN MÚLTIPLE] De acuerdo con la Jerarquía de Control de Riesgos exigida por PREXOR y el ISP, ¿cuáles de las siguientes medidas corresponden a Controles de Ingeniería (en la fuente o en el medio) que tienen prioridad sobre el uso de protectores auditivos?",
    caption: "Ilustración guía: Pirámide invertida de control donde intervenir la máquina y aislar el camino del sonido van antes que el EPP.",
    svg: `
      <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" rx="12" fill="#0f172a"/>
        <!-- Máquina encerrada en cabina -->
        <rect x="45" y="55" width="95" height="90" rx="8" fill="#1e293b" stroke="#22c55e" stroke-width="3" stroke-dasharray="6 3"/>
        <circle cx="92" cy="100" r="24" fill="#334155" stroke="#38bdf8" stroke-width="3"/>
        <text x="92" y="104" text-anchor="middle" fill="#fff" font-size="11" font-weight="700">MOTOR</text>
        <!-- Barrera acústica en el medio -->
        <rect x="175" y="45" width="14" height="110" rx="4" fill="#38bdf8"/>
        <text x="182" y="36" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">BARRERA</text>
        <!-- Ondas bloqueadas -->
        <path d="M148 85 Q162 100 148 115" fill="none" stroke="#22c55e" stroke-width="3"/>
        <!-- Trabajador protegido al otro lado -->
        <circle cx="245" cy="85" r="16" fill="#cbd5e1"/>
        <rect x="229" y="105" width="32" height="40" rx="6" fill="#cbd5e1"/>
      </svg>
    `,
    options: [
      "Encerramiento acústico de la máquina ruidosa mediante cabinas insonorizadas",
      "Instalación de barreras o pantallas acústicas y paneles fonoabsorbentes en el medio de propagación",
      "Mantenimiento preventivo, lubricación y anclajes antivibratorios en la fuente emisora",
      "Entregar tapones desechables como única medida sin evaluar la máquina",
      "Subir el volumen de la música ambiental para tapar el ruido del motor"
    ],
    correct: [0, 1, 2],
    explanation: "Los Controles de Ingeniería en la fuente (mantenimiento, amortiguación antivibratoria) y en el medio de propagación (encerramientos y barreras/pantallas fonoabsorbentes) tienen prioridad técnica sobre las medidas administrativas y los EPA."
  },
  {
    id: 8,
    multiple: false,
    question: "Según la Guía de Selección y Control de Protectores Auditivos del ISP, ¿qué problema de seguridad ocurre si un Protector Auditivo (EPA) atenúa en exceso y deja el nivel efectivo en el oído por debajo de 70 dB(A)?",
    caption: "Ilustración guía: Medidor del nivel efectivo dentro del oído con una zona verde óptima (70-79 dB(A)) y una zona inferior de alerta por aislamiento.",
    svg: `
      <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" rx="12" fill="#0f172a"/>
        <!-- Barra de zonas de atenuación -->
        <rect x="40" y="75" width="80" height="40" fill="#f59e0b" rx="6"/>
        <text x="80" y="99" text-anchor="middle" fill="#0f172a" font-size="11" font-weight="800">&lt; 70 dB(A) ¿?</text>
        <rect x="125" y="75" width="80" height="40" fill="#22c55e" rx="6"/>
        <text x="165" y="99" text-anchor="middle" fill="#052e16" font-size="11" font-weight="800">70-79 Óptimo</text>
        <rect x="210" y="75" width="75" height="40" fill="#ef4444" rx="6"/>
        <text x="247" y="99" text-anchor="middle" fill="#fff" font-size="11" font-weight="800">&gt; 80 Insuf.</text>
        <!-- Alarma no escuchada -->
        <circle cx="80" cy="45" r="14" fill="#ef4444"/>
        <text x="80" y="50" text-anchor="middle" fill="#fff" font-size="14" font-weight="800">🔔</text>
        <text x="160" y="150" text-anchor="middle" fill="#cbd5e1" font-size="12">¿Qué ocurre cuando se atenúa por debajo de 70 dB(A)?</text>
      </svg>
    `,
    options: [
      "Se logra la máxima calificación legal recomendada por el ISP",
      "Se produce sobreprotección: genera sensación de aislamiento e impide oír alarmas o voces de advertencia",
      "El protector auditivo multiplica la energía ultrasónica dentro del canal auditivo",
      "El trabajador queda exento de realizarse audiometrías por los próximos 10 años",
      "El protector se descalibra electrónicamente a los 5 minutos"
    ],
    correct: [1],
    explanation: "El ISP advierte que un NPSeq efectivo menor a 70 dB(A) produce SOBREPROTECCIÓN: el trabajador queda acústicamente aislado, tiene dificultad para escuchar alarmas de emergencia o instrucciones verbales y suele quitarse el protector."
  },
  {
    id: 9,
    multiple: false,
    question: "¿Qué efecto tiene en la protección real que un trabajador expuesto a ruido intenso se retire su Protector Auditivo (EPA) durante solo 15 a 30 minutos dentro de una jornada de 8 horas?",
    caption: "Ilustración guía: Jornada de 8 horas donde una pequeña fracción de tiempo sin usar el EPA desploma la curva de protección efectiva.",
    svg: `
      <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" rx="12" fill="#0f172a"/>
        <!-- Barra de tiempo de 8h -->
        <rect x="35" y="50" width="215" height="26" rx="5" fill="#22c55e"/>
        <rect x="252" y="50" width="33" height="26" rx="5" fill="#ef4444"/>
        <text x="142" y="67" text-anchor="middle" fill="#052e16" font-size="11" font-weight="800">CON EPA (7,5 h)</text>
        <text x="268" y="42" text-anchor="middle" fill="#ef4444" font-size="11" font-weight="800">SIN EPA</text>
        <!-- Flecha de caída brusca de eficacia -->
        <path d="M55 105 L180 105 L255 160" fill="none" stroke="#f59e0b" stroke-width="4"/>
        <circle cx="255" cy="160" r="6" fill="#ef4444"/>
        <text x="160" y="182" text-anchor="middle" fill="#cbd5e1" font-size="12">Efecto logarítmico del tiempo de uso en la atenuación efectiva</text>
      </svg>
    `,
    options: [
      "La protección efectiva cae drásticamente (pudiendo perderse más del 50% de la atenuación nominal) por el carácter logarítmico de la dosis",
      "No afecta en absoluto porque el oído descansa durante las otras 7,5 horas",
      "Solo disminuye un 1% la atenuación del protector auditivo",
      "Aumenta la protección efectiva porque ventila el conducto auditivo",
      "Duplica el límite máximo permisible del D.S. N° 594"
    ],
    correct: [0],
    explanation: "Según la Guía de Protectores Auditivos del ISP, la eficacia real depende críticamente del uso durante el 100% del tiempo de exposición. Quitarse el EPA apenas 15 a 30 minutos en ambientes ruidosos reduce drásticamente la atenuación efectiva debido a la escala logarítmica de la energía acústica."
  },
  {
    id: 10,
    multiple: false,
    question: "Para que una audiometría del programa de vigilancia de la salud (PREXOR / ISP) sea válida y no confunda una fatiga auditiva temporal con un daño permanente, ¿cuántas horas mínimas de reposo auditivo previo debe tener el trabajador?",
    caption: "Ilustración guía: Cabina audiométrica precedida por un período de descanso sin exposición a fuentes de ruido laboral ni extralaboral.",
    svg: `
      <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" rx="12" fill="#0f172a"/>
        <!-- Luna / descanso -->
        <circle cx="85" cy="95" r="38" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
        <text x="85" y="92" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="800">REPOSO</text>
        <text x="85" y="110" text-anchor="middle" fill="#cbd5e1" font-size="11" font-weight="700">AUDITIVO</text>
        <!-- Flecha -->
        <path d="M135 95 L180 95" stroke="#22c55e" stroke-width="4"/>
        <!-- Cabina audiométrica -->
        <rect x="195" y="45" width="90" height="100" rx="10" fill="#1e293b" stroke="#22c55e" stroke-width="3"/>
        <text x="240" y="92" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">CABINA</text>
        <text x="240" y="110" text-anchor="middle" fill="#22c55e" font-size="11" font-weight="700">AUDIOMETRÍA</text>
      </svg>
    `,
    options: [
      "1 hora de reposo auditivo",
      "4 horas de reposo auditivo",
      "6 horas de reposo auditivo",
      "Al menos 12 horas de reposo auditivo",
      "72 horas de hospitalización previa"
    ],
    correct: [3],
    explanation: "Las guías técnicas del ISP y PREXOR exigen un reposo auditivo mínimo de 12 horas antes de realizar la audiometría de base o de seguimiento, para evitar que un Cambio del Umbral Auditivo Temporal (TTS) altere el examen."
  },
  {
    id: 11,
    multiple: false,
    question: "Según los plazos obligatorios del protocolo PREXOR, si en un puesto de trabajo la evaluación arroja un nivel NPSeq igual o superior a 95 dB(A) (o una Dosis Diaria ≥ 1000%), ¿cuál es el plazo máximo que tiene el empleador para implementar las medidas de control?",
    caption: "Ilustración guía: Comparativa de plazos normativos en el calendario según la severidad de la exposición detectada.",
    svg: `
      <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" rx="12" fill="#0f172a"/>
        <!-- Calendario urgente -->
        <rect x="95" y="38" width="130" height="120" rx="12" fill="#1e293b" stroke="#ef4444" stroke-width="3"/>
        <rect x="95" y="38" width="130" height="32" rx="10" fill="#ef4444"/>
        <text x="160" y="59" text-anchor="middle" fill="#fff" font-size="12" font-weight="800">EXPOSICIÓN ≥ 95 dB(A)</text>
        <text x="160" y="105" text-anchor="middle" fill="#facc15" font-size="16" font-weight="800">PLAZO MÁXIMO</text>
        <text x="160" y="132" text-anchor="middle" fill="#cbd5e1" font-size="12" font-weight="600">Control Ingenieril</text>
      </svg>
    `,
    options: [
      "Máximo 6 meses",
      "Máximo 1 año (12 meses)",
      "Máximo 3 años",
      "Máximo 5 años",
      "No existe plazo mientras se entreguen tapones"
    ],
    correct: [0],
    explanation: "En PREXOR, cuando la exposición es igual o superior a 95 dB(A) (o Dosis ≥ 1000% o ≥ 135 dB(C) Peak), el plazo máximo para implementar medidas de control se acorta a 6 meses (mientras que entre 82 y <95 dB(A) el plazo es de 1 año)."
  },
  {
    id: 12,
    multiple: true,
    question: "[SELECCIÓN MÚLTIPLE] De acuerdo con la Guía del ISP para la Selección y Control de Protectores Auditivos, ¿cuáles son los tres métodos técnicos reconocidos oficialmente en Chile para calcular el Nivel de Presión Sonora Efectivo (NPSeq') que llega al oído?",
    caption: "Ilustración guía: Tres metodologías estandarizadas de cálculo de atenuación acústica desde el análisis por frecuencias hasta un valor global.",
    svg: `
      <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" rx="12" fill="#0f172a"/>
        <!-- 3 Columnas de métodos -->
        <rect x="28" y="45" width="80" height="110" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
        <text x="68" y="85" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="800">MÉTODO 1</text>
        <text x="68" y="110" text-anchor="middle" fill="#cbd5e1" font-size="10">63 Hz a 8 kHz</text>

        <rect x="120" y="45" width="80" height="110" rx="8" fill="#1e293b" stroke="#22c55e" stroke-width="2.5"/>
        <text x="160" y="85" text-anchor="middle" fill="#22c55e" font-size="12" font-weight="800">MÉTODO 2</text>
        <text x="160" y="110" text-anchor="middle" fill="#cbd5e1" font-size="10">3 Índices Frec.</text>

        <rect x="212" y="45" width="80" height="110" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2.5"/>
        <text x="252" y="85" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="800">MÉTODO 3</text>
        <text x="252" y="110" text-anchor="middle" fill="#cbd5e1" font-size="10">Valor Único</text>
      </svg>
    `,
    options: [
      "Método de Bandas de Octava",
      "Método HML (High, Medium, Low)",
      "Método SNR (Single Number Rating)",
      "Método de Estimación Visual por Color del Tapón",
      "Método de Peso Gramatical del Casco"
    ],
    correct: [0, 1, 2],
    explanation: "La Guía del ISP reconoce exactamente tres métodos para estimar la reducción de ruido de un EPA: el Método de Bandas de Octava (el más preciso), el Método HML y el Método SNR."
  },
  {
    id: 13,
    multiple: true,
    question: "[SELECCIÓN MÚLTIPLE] Respecto a la Hipoacusia Sensorioneural Laboral (HSNL) inducida por ruido ocupacional descrita en el protocolo PREXOR, ¿cuáles de las siguientes afirmaciones son verdaderas?",
    caption: "Ilustración guía: Audiograma clínico que muestra el deterioro neurosensorial en la zona de frecuencias agudas de la cóclea.",
    svg: `
      <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" rx="12" fill="#0f172a"/>
        <!-- Cuadrícula audiograma -->
        <rect x="45" y="30" width="230" height="130" fill="#1e293b" stroke="#475569" stroke-width="2"/>
        <!-- Curva con escotoma en agudos -->
        <polyline points="60,55 100,58 140,62 185,130 220,115 255,75" fill="none" stroke="#ef4444" stroke-width="4"/>
        <circle cx="185" cy="130" r="6" fill="#facc15"/>
        <text x="160" y="182" text-anchor="middle" fill="#cbd5e1" font-size="12" font-weight="600">Curva audiométrica: caída típica en frecuencias agudas</text>
      </svg>
    `,
    options: [
      "Es un daño irreversible por lesión de las células ciliadas del órgano de Corti en el oído interno (cóclea)",
      "Suele ser bilateral y simétrica, comenzando con una caída (escotoma) en las frecuencias agudas de 3.000, 4.000 y 6.000 Hz",
      "Se cura completamente en 48 horas tomando antibióticos e ibuprofeno",
      "Solo afecta al tímpano externo y nunca compromete el nervio ni la cóclea",
      "Es una enfermedad profesional prevenible mediante control ingenieril y vigilancia oportuna"
    ],
    correct: [0, 1, 4],
    explanation: "La HSNL por ruido es una enfermedad profesional prevenible pero IRREVERSIBLE una vez instalada: daña las células ciliadas de la cóclea (oído interno), suele ser bilateral/simétrica y afecta inicialmente las frecuencias de 3.000, 4.000 y 6.000 Hz."
  },
  {
    id: 14,
    multiple: false,
    question: "De acuerdo con el Instructivo del ISP para mediciones de ruido laboral, ¿qué procedimiento obligatorio de verificación en terreno debe realizarse con el calibrador acústico y cuándo debe descartarse la medición?",
    caption: "Ilustración guía: Verificación del micrófono con patrón acústico al inicio y al término de la jornada de medición.",
    svg: `
      <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" rx="12" fill="#0f172a"/>
        <!-- Calibrador antes -->
        <rect x="40" y="55" width="95" height="80" rx="10" fill="#1e293b" stroke="#22c55e" stroke-width="2.5"/>
        <text x="87" y="88" text-anchor="middle" fill="#22c55e" font-size="12" font-weight="800">ANTES</text>
        <text x="87" y="110" text-anchor="middle" fill="#cbd5e1" font-size="11">Calibración Ini.</text>
        <!-- Comparación -->
        <text x="160" y="100" text-anchor="middle" fill="#38bdf8" font-size="20" font-weight="800">⇄</text>
        <!-- Calibrador después -->
        <rect x="185" y="55" width="95" height="80" rx="10" fill="#1e293b" stroke="#22c55e" stroke-width="2.5"/>
        <text x="232" y="88" text-anchor="middle" fill="#22c55e" font-size="12" font-weight="800">DESPUÉS</text>
        <text x="232" y="110" text-anchor="middle" fill="#cbd5e1" font-size="11">Calibración Fin.</text>
        <text x="160" y="168" text-anchor="middle" fill="#facc15" font-size="12" font-weight="700">Tolerancia máxima permitida entre ambas verificaciones</text>
      </svg>
    `,
    options: [
      "Solo se calibra una vez cada 5 años y nunca se descarta ninguna medición",
      "Se verifica antes y después de cada jornada de medición; si la diferencia supera ±1,0 dB, la medición debe descartarse",
      "Se verifica únicamente al finalizar el mes y se permite un error de hasta ±15 dB",
      "Se calibra golpeando el micrófono contra una mesa metálica antes de medir",
      "No se requiere calibrador acústico si se mide con dosímetro personal"
    ],
    correct: [1],
    explanation: "El Instructivo del ISP exige verificar la calibración en terreno antes y después de cada medición diaria. Si entre la verificación inicial y final existe una desviación superior a ±1,0 dB, los datos obtenidos no son válidos y la medición debe descartarse."
  },
  {
    id: 15,
    multiple: false,
    question: "Según el programa de vigilancia de la salud de PREXOR, ¿con qué periodicidad debe realizarse la audiometría de seguimiento a un trabajador clasificado en Nivel de Seguimiento II (exposición entre > 85 dB(A) y ≤ 95 dB(A), o Dosis entre > 100% y ≤ 1000%)?",
    caption: "Ilustración guía: Escala de los tres Niveles de Seguimiento audiométrico definidos por PREXOR según el rango de exposición.",
    svg: `
      <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" rx="12" fill="#0f172a"/>
        <!-- Escalones de seguimiento -->
        <rect x="35" y="115" width="75" height="45" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="72" y="142" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="800">NIVEL I</text>

        <rect x="122" y="80" width="75" height="80" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="3"/>
        <text x="160" y="115" text-anchor="middle" fill="#facc15" font-size="13" font-weight="800">NIVEL II</text>
        <text x="160" y="135" text-anchor="middle" fill="#cbd5e1" font-size="10">85 &lt; dB ≤ 95</text>

        <rect x="210" y="45" width="75" height="115" rx="6" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
        <text x="247" y="95" text-anchor="middle" fill="#ef4444" font-size="12" font-weight="800">NIVEL III</text>
      </svg>
    `,
    options: [
      "Cada 10 años",
      "Cada 5 años",
      "Cada 3 años",
      "Cada 2 años",
      "Cada 6 días"
    ],
    correct: [3],
    explanation: "Según PREXOR, la periodicidad de las audiometrías de seguimiento es: Nivel I (cada 3 años), Nivel II (cada 2 años) y Nivel III (cada 1 año)."
  }
];

// ============================================================================
// ESTADO DE LA APLICACIÓN
// ============================================================================
let currentQuestionIndex = 0;
let selectedOptions = [];
let userHistory = []; // Guarda respuestas y aciertos por pregunta
let currentScore = 0;
let isCurrentVerified = false;

// ============================================================================
// NAVEGACIÓN DE VISTAS Y PÁGINAS DE LA NORMA
// ============================================================================
function showView(viewId) {
  document.querySelectorAll('.view').forEach((v) => v.classList.remove('active'));
  const target = document.getElementById(viewId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function switchNormaPage(pageNum) {
  document.getElementById('norma-page-1').classList.toggle('active', pageNum === 1);
  document.getElementById('norma-page-2').classList.toggle('active', pageNum === 2);
  document.getElementById('btn-page-1').classList.toggle('active', pageNum === 1);
  document.getElementById('btn-page-2').classList.toggle('active', pageNum === 2);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================================
// FLUJO DEL JUEGO / CUESTIONARIO
// ============================================================================
function startQuiz() {
  currentQuestionIndex = 0;
  selectedOptions = [];
  userHistory = [];
  currentScore = 0;
  isCurrentVerified = false;
  document.getElementById('live-score').textContent = '0';
  showView('quiz-view');
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const q = QUESTIONS[currentQuestionIndex];
  selectedOptions = [];
  isCurrentVerified = false;

  // Resetear bordes de tarjeta
  const card = document.getElementById('question-card');
  card.classList.remove('card-correct', 'card-wrong');

  // Actualizar barra superior
  document.getElementById('question-counter').textContent = `Pregunta ${currentQuestionIndex + 1} de ${QUESTIONS.length}`;
  const pct = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;
  document.getElementById('progress-bar-fill').style.width = `${pct}%`;

  const typeBadge = document.getElementById('question-type-badge');
  if (q.multiple) {
    typeBadge.textContent = 'Selección Múltiple';
    typeBadge.classList.add('multi');
    document.getElementById('question-instruction').textContent =
      '⚡ Atención: Esta pregunta es de SELECCIÓN MÚLTIPLE. Marca TODAS las opciones correctas antes de comprobar.';
  } else {
    typeBadge.textContent = 'Selección Única';
    typeBadge.classList.remove('multi');
    document.getElementById('question-instruction').textContent =
      'Selecciona la única alternativa correcta (1 de 5).';
  }

  // Imagen guía y título
  document.getElementById('question-svg-container').innerHTML = q.svg;
  document.getElementById('question-image-caption').textContent = q.caption;
  document.getElementById('question-title').textContent = `${q.id}. ${q.question}`;

  // Renderizar las 5 alternativas
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D', 'E'];

  q.options.forEach((optText, idx) => {
    const item = document.createElement('div');
    item.className = `option-item ${q.multiple ? 'multi-mode' : 'single-mode'}`;
    item.dataset.index = idx;
    item.onclick = () => toggleOption(idx);

    item.innerHTML = `
      <div class="option-indicator">${letters[idx]}</div>
      <div class="option-text">${optText}</div>
      <span class="option-tag hidden" id="opt-tag-${idx}"></span>
    `;
    optionsContainer.appendChild(item);
  });

  // Ocultar feedback y ajustar botones
  const feedbackBox = document.getElementById('feedback-box');
  feedbackBox.className = 'feedback-box hidden';
  feedbackBox.innerHTML = '';

  const btnVerify = document.getElementById('btn-verify');
  const btnNext = document.getElementById('btn-next');
  btnVerify.classList.remove('hidden');
  btnNext.classList.add('hidden');
  btnNext.textContent =
    currentQuestionIndex === QUESTIONS.length - 1
      ? '📊 Ver Resultados Finales →'
      : 'Siguiente Pregunta →';
}

function toggleOption(idx) {
  if (isCurrentVerified) return;

  const q = QUESTIONS[currentQuestionIndex];
  if (q.multiple) {
    if (selectedOptions.includes(idx)) {
      selectedOptions = selectedOptions.filter((i) => i !== idx);
    } else {
      selectedOptions.push(idx);
    }
  } else {
    selectedOptions = [idx];
  }

  // Actualizar clases visuales
  document.querySelectorAll('#options-container .option-item').forEach((el) => {
    const elIdx = Number(el.dataset.index);
    el.classList.toggle('selected', selectedOptions.includes(elIdx));
  });
}

function arraysEqualAsSets(a, b) {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort((x, y) => x - y);
  const sortedB = [...b].sort((x, y) => x - y);
  return sortedA.every((val, index) => val === sortedB[index]);
}

function verifyCurrentAnswer() {
  if (isCurrentVerified) return;
  if (selectedOptions.length === 0) {
    alert('Por favor, selecciona al menos una alternativa antes de comprobar.');
    return;
  }

  isCurrentVerified = true;
  const q = QUESTIONS[currentQuestionIndex];
  const isCorrect = arraysEqualAsSets(selectedOptions, q.correct);

  if (isCorrect) {
    currentScore++;
    document.getElementById('live-score').textContent = String(currentScore);
  }

  // Guardar en el historial para la revisión final
  userHistory.push({
    questionId: q.id,
    selected: [...selectedOptions],
    isCorrect
  });

  // Marcar el borde de la tarjeta en VERDE si acertó o ROJO si se equivocó
  const card = document.getElementById('question-card');
  card.classList.add(isCorrect ? 'card-correct' : 'card-wrong');

  // Marcar opciones individuales: las correctas siempre en borde verde, y las mal elegidas en rojo
  const letters = ['A', 'B', 'C', 'D', 'E'];
  document.querySelectorAll('#options-container .option-item').forEach((el) => {
    el.classList.add('disabled');
    const idx = Number(el.dataset.index);
    const tag = document.getElementById(`opt-tag-${idx}`);

    if (q.correct.includes(idx)) {
      el.classList.add('correct-answer');
      tag.textContent = '✓ Correcta';
      tag.className = 'option-tag tag-correct';
    } else if (selectedOptions.includes(idx)) {
      el.classList.add('wrong-answer');
      tag.textContent = '✗ Incorrecta';
      tag.className = 'option-tag tag-wrong';
    }
  });

  // Construir texto de la(s) respuesta(s) correcta(s)
  const correctTexts = q.correct.map((i) => `<strong>${letters[i]})</strong> ${q.options[i]}`).join('<br>• ');

  // Mostrar retroalimentación
  const feedbackBox = document.getElementById('feedback-box');
  if (isCorrect) {
    feedbackBox.className = 'feedback-box feedback-ok';
    feedbackBox.innerHTML = `
      <div><strong>✅ ¡Respuesta Correcta! (+1 punto)</strong></div>
      <div class="correct-explanation">
        <strong>Fundamento Normativo (ISP / D.S. 594 / PREXOR):</strong><br>
        ${q.explanation}
      </div>
    `;
  } else {
    feedbackBox.className = 'feedback-box feedback-fail';
    feedbackBox.innerHTML = `
      <div><strong>❌ Respuesta Incorrecta.</strong> Se ha marcado el borde en rojo.</div>
      <div class="correct-explanation">
        <strong>✅ Respuesta(s) Correcta(s) (Marcada en Verde):</strong><br>
        • ${correctTexts}<br><br>
        <strong>Explicación Normativa:</strong> ${q.explanation}
      </div>
    `;
  }

  // Cambiar botón
  document.getElementById('btn-verify').classList.add('hidden');
  document.getElementById('btn-next').classList.remove('hidden');
}

function nextQuestion() {
  if (currentQuestionIndex < QUESTIONS.length - 1) {
    currentQuestionIndex++;
    renderCurrentQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    renderFinalResults();
  }
}

// ============================================================================
// PANTALLA DE RESULTADOS FINALES Y REVISIÓN COMPLETA
// ============================================================================
function renderFinalResults() {
  showView('result-view');

  document.getElementById('final-score-num').textContent = String(currentScore);
  const pct = Math.round((currentScore / QUESTIONS.length) * 100);
  document.getElementById('final-percentage').textContent = `Lograste un ${pct}% de acierto (${currentScore} de ${QUESTIONS.length} preguntas correctas)`;

  let msg = '';
  if (currentScore >= 13) {
    msg = '¡Excelente dominio de la normativa chilena del ISP, D.S. N° 594 y Protocolo PREXOR!';
  } else if (currentScore >= 9) {
    msg = '¡Buen trabajo! Tienes una base sólida en prevención de riesgos de ruido ocupacional. Revisa las tarjetas con borde rojo para reforzar detalles técnicos.';
  } else {
    msg = 'Te recomendamos repasar las 2 páginas del Resumen de la Norma y volver a intentarlo para dominar los límites y criterios de PREXOR.';
  }
  document.getElementById('final-message').textContent = msg;

  // Construir lista de revisión de las 15 preguntas
  const reviewList = document.getElementById('review-list');
  reviewList.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D', 'E'];

  QUESTIONS.forEach((q, idx) => {
    const record = userHistory[idx] || { selected: [], isCorrect: false };
    const card = document.createElement('div');
    card.className = `review-card ${record.isCorrect ? 'review-correct' : 'review-wrong'}`;

    const optionsHtml = q.options
      .map((optText, optIdx) => {
        const isOptCorrect = q.correct.includes(optIdx);
        const isUserSelected = record.selected.includes(optIdx);
        let optClass = 'review-opt';
        let badge = '';

        if (isOptCorrect) {
          optClass += ' opt-correct';
          badge = `<span class="option-tag tag-correct">${isUserSelected ? '✓ Tu elección (Correcta)' : '✓ Respuesta Correcta'}</span>`;
        } else if (isUserSelected) {
          optClass += ' opt-user-wrong';
          badge = `<span class="option-tag tag-wrong">✗ Tu elección (Incorrecta)</span>`;
        }

        return `
          <div class="${optClass}">
            <span><strong>${letters[optIdx]})</strong> ${optText}</span>
            ${badge}
          </div>
        `;
      })
      .join('');

    card.innerHTML = `
      <div class="review-header">
        <strong>Pregunta ${q.id}: ${q.question}</strong>
        <span class="review-status ${record.isCorrect ? 'status-ok' : 'status-fail'}">
          ${record.isCorrect ? '✓ CORRECTA (+1 pto)' : '✗ INCORRECTA (0 ptos)'}
        </span>
      </div>
      <div class="review-options">${optionsHtml}</div>
      <div class="review-explanation-green">
        <strong>✅ Explicación de la Respuesta Correcta (Norma ISP / PREXOR):</strong><br>
        ${q.explanation}
      </div>
    `;

    reviewList.appendChild(card);
  });
}

// ============================================================================
// BOTÓN TERMINAR Y CERRAR PESTAÑA CON EL PUNTAJE GANADO
// ============================================================================
function finishAndCloseApp() {
  const pct = Math.round((currentScore / QUESTIONS.length) * 100);
  alert(
    `🏁 JUEGO FINALIZADO\n\n` +
    `Puntaje ganado: ${currentScore} de ${QUESTIONS.length} puntos (${pct}%)\n\n` +
    `¡Gracias por participar en el cuestionario de Prevención de Riesgos sobre Ruido Ocupacional (ISP Chile / PREXOR)!`
  );

  document.getElementById('closed-score-text').textContent = `${currentScore} / ${QUESTIONS.length} (${pct}%)`;
  showView('closed-view');

  // Intentar cerrar la pestaña del navegador
  try {
    window.open('', '_self', '');
    window.close();
  } catch (e) {
    // Si el navegador bloquea window.close() en pestañas no abiertas por script, queda visible la vista de cierre (#closed-view)
  }
}
