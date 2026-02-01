import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  Cpu,
  Shield,
  Zap,
  Target,
  Database,
  Phone,
  BarChart,
  ChevronRight,
  Activity,
  UserCheck,
  ArrowUpRight,
  MessageCircle,
  Clock,
  CheckCircle2,
  Mic,
  Maximize2,
  Lock,
  Wifi,
  MoreVertical,
  Play,
  RotateCcw,
  AlertTriangle,
  Lightbulb,
  MousePointer2,
  RefreshCw,
  Search,
  FileSearch,
  Terminal,
  ChevronDown,
  Eye,
  History,
  FileText,
  Globe,
  PieChart,
  ExternalLink,
  Users,
  Wallet,
  ArrowDownLeft,
  Server,
  Layers,
  Layout,
  Settings,
  Menu,
  X,
  Fullscreen,
  Shrink,
  LightbulbIcon,
  Workflow,
  ClipboardList,
  Video,
  MessageSquare,
  PhoneCall,
  LayoutGrid,
  CreditCard,
  Briefcase,
  Layers3,
  Waves,
  User,
  ArrowLeft,
  ShieldCheck
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

// --- UTILS ---
function cn(...inputs) { return twMerge(clsx(inputs)); }

// --- CONFIG & VALUE DATA ---
// --- CONFIG & VALUE DATA ---
const MODELS = {
  gemini: {
    name: "GEMINI 3.0 PRO",
    label: "ARCHITECT",
    provider: "GOOGLE DEEPMIND",
    icon: <Database size={14} />,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    shadow: "shadow-[0_0_30px_rgba(59,130,246,0.1)]",
    glass: "bg-blue-500/[0.03] border-blue-500/20",
    accent: "bg-blue-500"
  },
  claude: {
    name: "CLAUDE 4.5 OPUS",
    label: "STRATEGIST",
    provider: "ANTHROPIC AI",
    icon: <Shield size={14} />,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    shadow: "shadow-[0_0_30px_rgba(245,158,11,0.1)]",
    glass: "bg-amber-500/[0.03] border-amber-500/20",
    accent: "bg-amber-500"
  },
  gpt4: {
    name: "GPT-5.2 THINKING",
    label: "EXECUTOR",
    provider: "OPENAI FRONTIER",
    icon: <Zap size={14} />,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    shadow: "shadow-[0_0_30px_rgba(16,185,129,0.1)]",
    glass: "bg-emerald-500/[0.03] border-emerald-500/20",
    accent: "bg-emerald-500"
  }
};

const CLIENTS = [
  {
    id: 'c1',
    name: 'Roberto García',
    country: 'MX',
    flag: '🇲🇽',
    status: 'Inactivo_WhatsApp',
    stage: 'Recuperación',
    stageColor: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    value: '$5.2M',
    needs: 'Reactivación Estratégica (Take Away)',
    tag: 'VIP_GHOSTING',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    email: 'robert.g@inversion.mx'
  },
  {
    id: 'c2',
    name: 'Sarah Jenkins',
    country: 'USA',
    flag: '🇺🇸',
    status: 'Due_Diligence',
    stage: 'Negociación',
    stageColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    value: '$8.5M',
    needs: 'Certeza Jurídica & ROI Tax Audit',
    tag: 'INSTITUTIONAL_FUND',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop',
    email: 's.jenkins@vanguard.com'
  },
  {
    id: 'c3',
    name: 'Jean-Pierre Dubois',
    country: 'FR',
    flag: '🇫🇷',
    status: 'Discovery_Call',
    stage: 'Prospección',
    stageColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    value: '$3.5M',
    needs: 'Visión de Estilo de Vida & Tour Virtual',
    tag: 'LIFESTYLE_BUYER',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    email: 'jp.dubois@paris.fr'
  },
  {
    id: 'c4',
    name: 'Allesandro Moretti',
    country: 'IT',
    flag: '🇮🇹',
    status: 'Closing_Contract',
    stage: 'Cierre',
    stageColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    value: '$12.2M',
    needs: 'Plan de Pagos & Estructura Fiscal',
    tag: 'WHALE_INVESTOR',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop',
    email: 'alessandro.m@milano.it'
  },
  {
    id: 'c5',
    name: 'Laura Méndez',
    country: 'MX',
    flag: '🇲🇽',
    status: 'Retell_Pending',
    stage: 'Seguimiento',
    stageColor: 'text-slate-400 bg-slate-500/10 border-slate-500/20',
    value: '$3.8M',
    needs: 'Aislamiento de Objeciones (Llamada IA)',
    tag: 'CALL_CENTER_AI',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    email: 'laura.m@patrimonio.mx'
  }
];


const SELLERS = [
  { name: "Carlos Jiménez", role: "Closer Senior", roi: "+22%", score: "9.4", weakness: "Follow-up Fatigue", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop", status: 'Elite' },
  { name: "Ana P. Torres", role: "Lead Qualifier", roi: "+15%", score: "8.8", weakness: "Objection Handling", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop", status: 'Rising' },
  { name: "Javier B.", role: "Portfolio Manager", roi: "-4%", score: "7.2", weakness: "Authority Leaks", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", status: 'Risk' }
];

const URGENT_LEADS = [
  { name: "Familia Rothschild", issue: "Contrato Estancado (48h)", value: "$12.5M", action: "Llamada de Rescate // CEO" },
  { name: "Corp. Inversiones", issue: "Falta Documentación Legal", value: "$4.5M", action: "Envío Pack Jurídico" },
  { name: "Julianne Moore", issue: "Objeción de Precio (Hard)", value: "$2.8M", action: "Estrategia 'Take Away'" }
];

const SCENARIOS = [
  {
    id: 'wa_reactivation',
    label: 'RECUPERACIÓN DE LEADS',
    title: 'Análisis de Reactivación WhatsApp',
    description: 'Sistema diseñado para prospectos que han dejado de responder. Analiza el historial de chat para detectar el "bloqueo técnico" y despliega scripts de psicología inversa para recuperar el interés inmediato.',
    metrics: { impact: '84%', label: 'LEADS REACTIVADOS', status: 'Alta Tensión', statusLabel: 'PROTOCOL_LAZARUS_ACTIVE' },
    input: {
      source: 'AUDITORÍA DE CHAT',
      id: 'WA_AUDIT_01',
      title: 'HISTORIAL: ROBERTO GARCÍA (MX)',
      meta: 'Monto Proyectado: $5.2M // SILENCIO: 96 Horas // Origen: Campaña Luxury',
      content: `[FLUJO DE CONVERSACIÓN]
1. Vendedor: "Roberto, te envío el PDF con los rendimientos. Es el más rentable."
2. Roberto: "Gracias, lo reviso con mi socio."
3. Vendedor (24h): "¿Tuviste oportunidad de verlo?" (Leído)
4. Vendedor (72h): "Hola Roberto, sigo atento a tus dudas." (Leído)

[DIAGNÓSTICO DE IA]
El prospecto ha detectado necesidad por parte del vendedor. Se ha perdido el posicionamiento de 'Consultor Senior' y ahora se percibe como 'Vendedor Administrativo'. El silencio es reactivo a la presión.`
    },
    council: {
      gemini: {
        title: "Análisis de Estructura",
        oportunidades: ["Roberto utilizó al 'socio' como una zona de amortiguación (Buffer Region) para detener el impulso de venta.", "El PDF técnico generó una parálisis por análisis al no destacar el ROI neto sobre la inflación."],
        estrategias: ["Re-centralizar la conversación en la 'Ventana de Oportunidad de 72 horas' antes del próximo ajuste de lista.", "Invalidar el PDF genérico para introducir una simulación privada."],
        metodologias: ["Marco: Inversión de Status.", "Técnica: La Invalidación Progresiva."]
      },
      claude: {
        title: "Estrategia Dialéctica",
        oportunidades: ["Falta de validación emocional. Roberto siente que su tiempo no es respetado por el bombardeo de recordatorios vacíos.", "El silencio de Roberto es un grito de 'No me estás aportando valor nuevo'."],
        estrategias: ["Enviar un fragmento de audio (Voice Note) de 15 segundos con un tono de 'baja importancia' (Low Stakes) para recuperar el estatus.", "Apalancar la figura del socio como un aliado, no un obstáculo."],
        metodologias: ["Marco: Empatía Táctica (Chris Voss).", "Técnica: El Etiquetado del Silencio."]
      },
      gpt4: {
        title: "Cierre de Alta Frontera",
        oportunidades: ["La escasez percibida es nula. Roberto siente que puede comprar el próximo mes sin consecuencias.", "Requiere una 'Ruptura de Patrón' (Pattern Interrupt) que fuerce una decisión instantánea."],
        estrategias: ["Script de Desconexión (The Takeaway Close): Informar que se cerrará su expediente para dar prioridad a otro fondo.", "Generar una 'Pérdida de Privilegio'."],
        metodologias: ["Marco: Psicología Inversa.", "Técnica: El Cierre por Renuncia."]
      }
    },
    output: {
      label: 'ESTRATEGIA RECOMENDADA',
      version: 'TAKEAWAY_FRAMEWORK',
      title: 'TÉCNICA DE DESCONEXIÓN ESTRATÉGICA',
      content: `OBJETIVO: Retirar la oferta para activar la sensación de pérdida en el prospecto.
      
MANUAL DE EJECUCIÓN:
El prospecto (Roberto) debe sentir que el privilegio de invertir ya no está garantizado. Debemos invertir la jerarquía de la conversación.

SCRIPT DE ALTA JERARQUÍA (ENVIAR AHORA):
"Roberto, he revisado el pipeline institucional del proyecto. Como no hemos recibido confirmación de su interés, entiendo que los tiempos del fondo no se alinean con su liquidez actual.

Por un tema de transparencia, liberaré su reserva de la Unidad 402 hoy a las 6:00 PM para dar paso a un perfil en lista de espera. Si su situación cambia en el futuro, no dude en contactarme. Éxito."`
    }
  },
  {
    id: 'institutional_audit',
    label: 'AUDITORÍA CORPORATIVA',
    title: 'Análisis de Fondos Institucionales',
    description: 'Protocolo para inversionistas de alto impacto que priorizan la mitigación de riesgos legales y fiscales sobre las promesas comerciales. Enfocado en generar certeza absoluta para juntas directivas.',
    metrics: { impact: '92%', label: 'VALIDACIÓN LEGAL', status: 'Cumplido', statusLabel: 'COMPLIANCE_LEVEL_SEC' },
    input: {
      source: 'EMAIL_THREAD_ANALYSIS',
      id: 'CORP_SARAH_02',
      title: 'NEGOCIACIÓN: SARAH JENKINS',
      meta: 'Fondo: Vanguard Capital // Objeción: Riesgo País // Ticket: $8.5M',
      content: `[LOG DE EMAIL]
1. Sarah: "We like the numbers, but our legal team is concerned about title insurance and enforceability of contracts in Mexico."
2. Vendedor: "Don't worry Sarah, we have the best lawyers. Everything is safe."
3. Sarah: "We need more than that. Send over the heavy diligence package." (Tono Frío)

[DIAGNÓSTICO]
El vendedor respondió con 'Confianza Ciega' en lugar de 'Evidencia Documental'. El cliente institucional no compra promesas, compra pólizas de seguro.`
    },
    council: {
      gemini: {
        title: "Estrategia Legal",
        oportunidades: ["Se requiere la presentación de la estructura del Fideicomiso (Bank Trust) de forma inmediata.", "Falta de mención de Cuentas de Custodia (Escrow) americanas para mayor seguridad transaccional."],
        estrategias: ["Pivotar a un marco de Cumplimiento Internacional: Mostrar que la operación sigue estándares globales.", "Presentar el Seguro de Título (Title Insurance) como garantía principal."],
        metodologias: ["Marco: Seguridad Jurídica.", "Técnica: Transparencia Bancaria."]
      },
      claude: {
        title: "Estrategia Ejecutiva",
        oportunidades: ["El tono actual es demasiado informal para un inversionista institucional.", "Se debe cambiar la percepción de 'Vendedor' a 'Socio Estratégico de Ejecución Local'."],
        estrategias: ["Validar formalmente las objeciones del cliente.", "Proponer una reunión técnica entre los equipos legales de ambas partes."],
        metodologias: ["Marco: Relaciones B2B.", "Técnica: Diálogo entre Expertos."]
      },
      gpt4: {
        title: "Ejecución de Negocio",
        oportunidades: ["Si el reporte de auditoría no se entrega en menos de 2 horas, se perderá la confianza del fondo.", "El objetivo inmediato es la firma de la Carta de Intención (LOI)."],
        estrategias: ["Envío inmediato de un reporte de 50 páginas con póliza de seguro incluida.", "Agendar revisión línea por línea vía Zoom."],
        metodologias: ["Marco: Eficiencia Corporativa.", "Técnica: Cierre por Documentación."]
      }
    },
    output: {
      label: 'ESTRATEGIA INSTITUCIONAL',
      version: 'RISK_MITIGATION_v4',
      title: 'PROTOCOLO DE CONFIANZA GLOBAL',
      content: `PRINCIPIO: El capital institucional prioriza la seguridad jurídica sobre el rendimiento bruto.
      
MANUAL DE OPERACIÓN:
Cambiar el enfoque de 'plusvalía' a 'blindaje legal'. El cliente debe sentir que su inversión está protegida por leyes internacionales.

ACCIONES INMEDIATAS:
1. Enviar el borrador del Fideicomiso.
2. Confirmar la póliza de Stewart Title.
3. Agendar llamada con el Abogado Corporativo.`
    }
  },
  {
    id: 'lifestyle_vision',
    label: 'VISION_SELLING // LIFESTYLE',
    title: 'Venta Visionaria // Jean-Pierre (FR)',
    description: 'Adaptación para el comprador Hedonista/Lifestyle. El enfoque numérico aburre; el enfoque emocional y de exclusividad cierra. Se vende el "Quién serás" al vivir ahí.',
    metrics: { impact: '88%', label: 'RESONANCIA_EMOCIONAL', status: 'Activo', statusLabel: 'LIFESTYLE_MATCH' },
    input: {
      source: 'SHOWROOM_FEEDBACK',
      id: 'TOUR_JPIERRE_05',
      title: 'VISITA FÍSICA: JEAN-PIERRE',
      meta: 'Interés: Penthouse // Perfil: Coleccionista de Arte // Objeción: "Le falta alma"',
      content: `[TRANSCRIPCIÓN SHOWROOM]
Jean-Pierre: "El espacio es grande, sí. Pero se siente... frío. No veo dónde pondría mi colección. Es solo concreto."
Vendedor: "Tiene 300 metros cuadrados y acabados de mármol importado. Es muy lujo."

[ERROR DETECTADO]
El vendedor respondió con 'Características' (Mármol, Metros) ante una objeción de 'Identidad'. Jean-Pierre no compra metros, compra un escenario para su vida.`
    },
    council: {
      gemini: {
        title: "Arquitecto de Espacios",
        oportunidades: ["Jean-Pierre necesita visualizar la 'Curaduría del Espacio'.", "El vendedor debe dejar de hablar de materiales y empezar a hablar de iluminación y flujo."],
        estrategias: ["Re-iluminar la narrativa: 'Este muro no es concreto, es el lienzo para tu obra maestra de Basquiat'."],
        metodologias: ["Marco: Neuro-Arquitectura.", "Técnica: El Re-Encuadre Espacial."]
      },
      claude: {
        title: "Estratega de Deseo",
        oportunidades: ["'Falta alma' significa 'No me veo aquí'. Hay que activar las neuronas espejo.", "Usar un lenguaje sensorial (Visual, Kinestésico)."],
        estrategias: ["Narrativa Evocativa: 'Imagina esto Jean-Pierre: 7 PM, atardecer, una copa de Bordeaux en esta terraza, con tu escultura central iluminada...'."],
        metodologias: ["Marco: Storytelling Inmersivo.", "Técnica: La Pintura Verbal."]
      },
      gpt4: {
        title: "Cierre de Ego",
        oportunidades: ["Este es un cierre de Vanidad. El precio es irrelevante si el ego es satisfecho.", "El cierre debe ser sobre la 'Exclusividad' de poseer esta pieza única."],
        estrategias: ["Script de Exclusividad: 'Jean-Pierre, este PH no es para cualquiera. De hecho, solo un coleccionista entendería la luz de esta sala. ¿Es este el hogar que merece tu colección?'"],
        metodologias: ["Marco: Venta de Status.", "Técnica: El Desafío del Ego."]
      }
    },
    output: {
      label: 'NARRATIVA DE VISIÓN',
      version: 'LIFESTYLE_LUX_v2',
      title: 'TÉCNICA "EL LIENZO EN BLANCO"',
      content: `PRINCIPIO: No vendas la caja, vende la vida dentro de la caja.

SCRIPT DE RE-ENCUADRE (EN SITIO):
"Jean-Pierre, detente un segundo aquí. Olvida el mármol.
Mira ese muro de doble altura.
(Silencio 3 segundos)

La mayoría ve una pared. Yo veo el único lugar en toda la ciudad capaz de sostener una pieza de gran formato sin que se sienta apretada. 
Este no es un departamento. Es una galería privada con habitación.
¿Te imaginas tu pieza central recibiendo esta luz del atardecer?"`
    }
  },
  {
    id: 'retell_optimize',
    label: 'RETELL AI // VOICE_AUDIT',
    title: 'Optimización de Call Center AI // Retell Audio',
    description: 'Auditoría profunda de la IA de voz encargada de la primera llamada post-WhatsApp. Analiza si la IA defendió el valor o fue descartada como un bot de telemarketing.',
    metrics: { impact: '96%', label: 'EFICACIA_CONVERSIÓN', status: 'Optimizado', statusLabel: 'RETELL_L5_THINKING' },
    input: {
      source: 'RETELL.AI_SENSORS',
      id: 'CALL_LAURA_M_04',
      title: 'AUDIO STREAM: LAURA MÉNDEZ',
      meta: 'Latencia Promedio: 140ms // Tono IA: Optimista // Objetivo: Zoom Discovery',
      content: `[LOG DE INTERACCIÓN RETELL]
0:05 - IA: "Hola Laura, soy la asistente elite de Duke System. Vi tu interés en la torre..."
0:12 - Laura: "Sí, pero estoy entrando a una junta, no puedo hablar."
0:18 - IA: "Entiendo. Solo quería agendarte un Zoom para mostrarte los planos."
0:25 - Laura: "Por ahora mándamelo por texto, bye." (Cuelga)

[FALLO DETECTADO]
La IA no realizó 'Aislamiento de Objeción' y permitió que el lead terminara la interacción sin compromiso.`
    },
    council: {
      gemini: {
        title: "Arquitecto de Flujos",
        oportunidades: ["La IA falló al procesar la 'Urgencia Situacional' de Laura.", "Se intentó vender el 'Zoom' (el medio) en lugar del 'Acceso Privado' (el fin)."],
        estrategias: ["Inyectar una 'Pregunta de Micro-Compromiso' inmediata ante la negativa.", "Utilizar la técnica de 'Respeto al Tiempo' para comprar 10 segundos adicionales."],
        metodologias: ["Marco: Conversational AI Optimization.", "Técnica: El Puente de 10 Segundos."]
      },
      claude: {
        title: "Estratega de Tono",
        oportunidades: ["El tono fue demasiado 'asistente' y poco 'asesor'. La voz necesita más peso en las frecuencias bajas para proyectar autoridad.", "Falta de resonancia emocional con la 'junta' de Laura."],
        estrategias: ["Respuesta Empática: 'Laura, te dejo entrar a tu junta. Solo dime si te envío el código de acceso VIP por WhatsApp o si lo vemos mañana...'."],
        metodologias: ["Marco: Inteligencia Vocal AI.", "Técnica: El Cierre de Alternativa."]
      },
      gpt4: {
        title: "Ejecución de Conversión",
        oportunidades: ["La IA debe 'Atajar' el cuelgue con un beneficio de alta velocidad (High Velocity Value).", "Automatizar el re-agendamiento vía WhatsApp en el milisegundo que detecta el cuelgue."],
        estrategias: ["Script de Contingencia: 'Entendido Laura. Te mando ahora el link de agenda de única ocasión. El Dr. Duke solo tiene 2 espacios.'"],
        metodologias: ["Marco: Frictionless Conversion.", "Técnica: El Link de Poder."]
      }
    },
    output: {
      label: 'PROTOCOLO DE INTERVENCIÓN',
      version: 'SPEED_LEAD_v9',
      title: 'GUIÓN: LA SALIDA DE EMERGENCIA',
      content: `PRINCIPIO: No pidas tiempo, ofrece valor comprimido. Usa la técnica "Permission-Based" invertida.

SCRIPT OPTIMIZADO:
"Laura, cero estrés. Entiendo que vas entrando a junta.
Hagamos esto: No hablemos. 
Te voy a mandar un enlace único a tu WhatsApp con el 'Tour Virtual Inmersivo' de la torre.
Dura solo 90 segundos. Míralo cuando salgas de tu junta y si te hace sentido la plusvalía del 18%, me pones un 'OK' y te libero el acceso a precios de lista.
¿Te parece justo?"`
    }
  },
  {
    id: 'airdna_master',
    label: 'AIRDNA // ROI_INTEL',
    title: 'Inteligencia de Rentabilidad // Auditoría AirDNA',
    description: 'Análisis predictivo de ROI utilizando la integración de datos más avanzada del mundo. Proyecta el flujo de caja neto analizando la competencia directa y la demanda histórica.',
    metrics: { impact: '29.4%', label: 'ROI_NETO_POTENCIAL', status: 'Verificado', statusLabel: 'AIRDNA_GOLD_DATA' },
    input: {
      source: 'AIRDNA_DATA_CLOUD',
      id: 'AIR_PRO_V9',
      title: 'MÉTRICAS DE ALTO IMPACTO',
      meta: 'Muestra: 50 Propiedades Similares // Radio: 2km // Histórico: 5 años',
      content: `[DATASET AIRDNA AUDITADO]
• ADR (Tarifa Diaria): $345 USD (Top 10% del mercado).
• Ocupación: 78% (Ajustado por estacionalidad).
• Gastos Operativos: 15% (Management incluido).
• Ingreso Neto Anual Estimado: $74,200 USD.

[SENTENCIA DE MERCADO]
El activo se encuentra en una 'Zona de Ocupación Premium'. La demanda supera la oferta actual en un 22%.`
    },
    council: {
      gemini: {
        title: "Arquitecto Patrimonial",
        oportunidades: ["La correlación entre ocupación y ADR indica un poder de fijación de precios (Pricing Power) alto.", "Riesgo de saturación de mercado bajo en el próximo trienio."],
        estrategias: ["Apalancar la plusvalía por escasez de suelo en el cuadrante A."],
        metodologias: ["Marco: Ingeniería de Inversión.", "Técnica: La Proyección de Capital."]
      },
      claude: {
        title: "Estratega de Mercado",
        oportunidades: ["El perfil del huésped es 'Nómada Corporativo de Lujo'. Requiere mobiliario de alta gama para asegurar el ADR sugerido.", "Transparencia total de datos para el inversor."],
        estrategias: ["Presentar el 'Pack de Mobiliario' como una inversión, no un gasto."],
        metodologias: ["Marco: Estabilidad Institucional.", "Técnica: La Auditoría de Datos."]
      },
      gpt4: {
        title: "Operador de Rentabilidad",
        oportunidades: ["El ROI neto supera al mercado bursátil en un 12% anual. Es el argumento central de cierre.", "Generar una 'Corrida de Pagos' automatizada."],
        estrategias: ["Cierre Financiero: 'Es matemáticamente irresponsable no diversificar aquí'."],
        metodologias: ["Marco: Inversión Racional.", "Técnica: La Prueba Social de ROI."]
      }
    },
    output: {
      label: 'REPORTE DE RENTABILIDAD',
      version: 'ROI_GOLD_v1',
      title: 'DICTAMEN DE ADQUISICIÓN',
      content: `DICTAMEN FINAL: OPORTUNIDAD TUNA (Tactical Underpriced Net Asset).
Los datos de AirDNA confirman que el punto de equilibrio (Break-even) se alcanza en 4.2 años, un 30% más rápido que el promedio nacional. 
RECOMENDACIÓN: Ejecutar reserva inmediata para asegurar el descuento de preventa de $12k USD adicional.`
    }
  }
];

// --- COMPONENTS ---

const Header = ({ live, setLive, workspace, setWorkspace }) => (
  <header className="h-24 grid grid-cols-12 items-center px-12 bg-[#010101]/90 backdrop-blur-2xl border-b border-white/5 z-[150] fixed top-0 w-full">

    {/* COL 1: IDENTITY (3 Cols) */}
    <div className="col-span-3 flex items-center gap-6">
      <div className="flex flex-col">
        <h1 className="text-[22px] font-[300] tracking-[-0.02em] uppercase font-display leading-none text-white select-none pointer-events-none">
          DUKE<span className="text-emerald-500 font-[500] ml-1.5">SYSTEM</span>
        </h1>
        <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-slate-600 font-mono italic mt-1.5">
          v.9.1.0 <span className="text-emerald-500/40 ml-1">// INTEL_CORE</span>
        </span>
      </div>
    </div>

    {/* COL 2: NAVIGATION (6 Cols - Centered) */}
    <div className="col-span-6 flex justify-center">
      <nav className="flex p-1.5 bg-white/[0.02] border border-white/5 rounded-full shadow-inner">
        <button
          onClick={() => setWorkspace('intelligence')}
          className={cn(
            "px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.25em] transition-all duration-500 font-mono",
            workspace === 'intelligence' ? "bg-white/10 text-emerald-400 shadow-lg border border-white/5" : "text-slate-500 hover:text-slate-300"
          )}
        >
          MAESTRÍA_CORE
        </button>
        <button
          onClick={() => setWorkspace('crm')}
          className={cn(
            "px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.25em] transition-all duration-500 font-mono ml-1",
            workspace === 'crm' ? "bg-blue-500/10 text-blue-400 shadow-lg border border-blue-500/20" : "text-slate-500 hover:text-slate-300"
          )}
        >
          MONITOREO_CRM
        </button>
      </nav>
    </div>

    {/* COL 3: UTILITIES & TRUST (3 Cols - Right) */}
    <div className="col-span-3 flex justify-end items-center gap-6">

      {/* TRUST SIGNAL - VERIFIED BLUE BADGE */}
      <div className="hidden xl:flex flex-col items-end cursor-help group/trust">
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.1em] font-mono group-hover/trust:text-blue-300 transition-colors">DUKE METHOD®</span>
          <ShieldCheck size={10} className="text-blue-400 fill-blue-400/20" />
        </div>
        <div className="flex items-center gap-1.5 bg-blue-500/10 px-2 py-0.5 rounded text-[8px] font-bold text-blue-300 border border-blue-500/20">
          <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
          AUDITED SALES: $700M+
        </div>
      </div>

      <div className="h-4 w-px bg-white/10 hidden xl:block" />

      {/* SYSTEM TOGGLE */}
      <button
        onClick={() => setLive(!live)}
        className={cn(
          "h-8 px-4 rounded-lg text-[8px] font-black uppercase tracking-[0.2em] border transition-all duration-300 hover:scale-105 active:scale-95",
          live ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" : "bg-white/5 border-white/10 text-slate-600"
        )}
      >
        {live ? "ONLINE" : "OFFLINE"}
      </button>

      {/* USER PROFILE */}
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all cursor-pointer shadow-lg group">
        <Settings size={16} className="group-hover:rotate-90 transition-transform duration-700" />
      </div>

    </div>
  </header>
);

const FloatingDock = ({ active, setTab, scenarios, visible = true }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700",
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
    >
      <div
        className="relative px-4 py-8 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{
            width: isHovered ? "auto" : "240px",
            height: isHovered ? "84px" : "4px",
            borderRadius: isHovered ? "42px" : "2px",
            padding: isHovered ? "12px" : "0px",
            backgroundColor: isHovered ? "rgba(1, 1, 1, 0.95)" : "rgba(16, 185, 129, 0)",
            boxShadow: isHovered
              ? "0 40px 100px -20px rgba(0, 0, 0, 0.9), 0 0 50px rgba(16, 185, 129, 0.1), 0 0 2px rgba(59, 130, 246, 0.5)"
              : "0 0 20px rgba(16, 185, 129, 0.4)",
          }}
          transition={{ type: "spring", stiffness: 450, damping: 35 }}
          className="flex items-center gap-2 backdrop-blur-3xl border border-white/10 relative overflow-hidden group"
        >
          {/* THE THIN LINE (Uncollapsed State) */}
          <AnimatePresence mode="wait">
            {!isHovered ? (
              <motion.div
                key="line"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] animate-[scan_2s_linear_infinite]" />
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex items-center gap-1.5 h-full px-4"
              >
                {scenarios.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setTab(idx)}
                    className={cn(
                      "group/btn relative px-5 h-full rounded-full transition-all duration-300 flex flex-col items-center justify-center min-w-[140px] overflow-hidden",
                      active === idx ? "text-white" : "text-slate-600 hover:text-slate-300"
                    )}
                  >
                    {active === idx && (
                      <motion.div
                        layoutId="pill-bg"
                        className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-white/10 rounded-full z-0"
                      />
                    )}
                    <span className={cn(
                      "text-[7px] font-black uppercase tracking-[0.4em] relative z-10 mb-1 font-mono transition-colors",
                      active === idx ? "text-emerald-400" : "text-slate-700 group-hover/btn:text-slate-400"
                    )}>
                      {s.label.split(' // ')[0]}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-none font-display">
                      {s.label.split(' // ')[1]}
                    </span>
                    {active === idx && (
                      <motion.div
                        layoutId="pill-dot"
                        className="absolute bottom-1 w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"
                      />
                    )}
                  </button>
                ))}

                <div className="w-px h-10 bg-white/10 mx-4" />

                <div className="flex items-center gap-6 px-4">
                  <div className="flex flex-col items-end">
                    <span className="text-[7px] font-black text-slate-500 uppercase tracking-widest font-mono">Core</span>
                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Active</span>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
                    <Settings size={18} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>


    </div>
  );
};

const InputPane = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="rounded-[2.5rem] bg-[#050505] border border-white/5 flex flex-col h-full overflow-hidden hover:border-blue-500/10 transition-all duration-700 group/pane shadow-2xl relative">
      <div className="p-8 border-b border-white/5 flex flex-col gap-6 bg-white/[0.01] relative z-10 transition-colors group-hover/pane:bg-blue-500/[0.01]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1.5">
            <span className="text-[8px] font-black text-blue-500/60 tracking-[0.6em] uppercase font-mono flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500/40 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500/80"></span>
              </span>
              INPUT_ESTRATÉGICO
            </span>
            <h3 className="text-lg font-[300] text-white uppercase tracking-wider font-display">&gt; CONTEXTO_DEL_USUARIO</h3>
          </div>
          <div className="flex gap-4 opacity-30 group-hover/pane:opacity-100 transition-all duration-700">
            <Command size={14} className="text-blue-500 cursor-pointer" />
            <Layers size={14} className="text-emerald-500 cursor-pointer" />
          </div>
        </div>

        <div className="w-full p-4 rounded-xl border border-dashed border-white/5 bg-white/[0.01] flex items-center justify-center gap-3 group/drop cursor-pointer hover:border-blue-500/20 transition-all">
          <span className="text-[8px] font-mono text-slate-600 uppercase tracking-[0.4em] font-bold group-hover/drop:text-blue-400/60 transition-colors">
            INYECTAR_DATA_ADICIONAL
          </span>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col relative overflow-hidden">
        <div className={cn(
          "flex-1 p-6 rounded-2xl bg-[#020202] border border-white/5 font-mono text-[12px] text-slate-400/80 leading-relaxed overflow-hidden transition-all duration-700 relative",
          expanded ? "max-h-[1200px]" : "max-h-[450px]"
        )}>
          <div className="flex items-center gap-3 mb-4 opacity-30">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>
            <span className="text-[8px] font-mono ml-auto tracking-widest uppercase italic">Node_{data.id}</span>
          </div>

          <div className="relative z-10 font-sans text-[15px] leading-loose text-slate-300 italic pr-4 whitespace-pre-line">
            {data.content}
          </div>

          {!expanded && <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none" />}
        </div>

        <button onClick={() => setExpanded(!expanded)} className="mt-8 mx-auto flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.5em] text-slate-600 hover:text-white transition-all font-mono group/btn">
          <Eye size={12} className={cn("transition-transform group-hover/btn:scale-110", expanded && "rotate-180")} />
          {expanded ? "COLAPSAR_FLUJO" : "AUDITAR_FLUJO_VIVO"}
        </button>
      </div>
    </div>
  );
};

const CouncilInsight = ({ modelKey, data, inputData, setFullScreen, setModel, onShowAllClients }) => {
  const m = MODELS[modelKey];
  const [activeClient, setActiveClient] = useState(CLIENTS[0]);

  if (!data) return (
    <div className="flex-1 flex items-center justify-center p-20">
      <div className="flex flex-col items-center gap-6 opacity-20">
        <Cpu size={40} className="text-slate-500 animate-[spin_4s_linear_infinite]" />
        <span className="text-slate-600 font-black uppercase tracking-[0.8em] text-[10px] font-mono italic">NODE_SYNC_ACTIVE...</span>
      </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col pt-4">
      {/* IDENTITY BAR */}
      {/* IDENTITY BAR - REDESIGNED */}
      <div className="mb-10 flex items-center justify-between p-2 pl-2 pr-2 bg-[#050505] border border-white/10 rounded-3xl shadow-2xl group/bar hover:bg-[#0a0a0a] transition-all relative overflow-hidden">

        {/* Decorative Glow */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full pointer-events-none" />

        <div className="flex items-center gap-6 pl-6 relative z-10">
          <div className="relative group/avatar cursor-pointer" onClick={onShowAllClients}>
            <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/10 group-hover/avatar:border-white/30 transition-all shadow-lg duration-700">
              <img src={activeClient.avatar} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 text-lg drop-shadow-md">
              {activeClient.flag}
            </div>
          </div>
          <div className="flex flex-col cursor-pointer" onClick={onShowAllClients}>
            <div className="flex items-center gap-3">
              <h4 className="text-white font-[500] text-xl tracking-tight font-display">{activeClient.name}</h4>
              <span className={cn("px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider border", activeClient.stageColor)}>
                {activeClient.stage}
              </span>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] font-mono">EXP: {activeClient.id.toUpperCase()}</span>
              <div className="w-0.5 h-3 bg-white/10" />
              <span className="text-[9px] font-medium text-emerald-500 font-mono tracking-wide">{activeClient.value} PATRIMONIO</span>
            </div>
          </div>
        </div>

        <button
          onClick={onShowAllClients}
          className="h-10 px-6 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group/btn mr-2"
        >
          <span className="text-[9px] font-black uppercase tracking-widest font-mono hidden xl:block group-hover/btn:tracking-[0.25em] transition-all">CAMBIAR ACTIVO</span>
          <Users size={16} />
        </button>
      </div>

      {/* AI ORCHESTRATOR selector */}
      {/* AI ORCHESTRATOR selector - TEXT ONLY MINIMALIST */}
      <div className="flex items-center justify-between gap-2 mb-8 p-1 bg-white/[0.02] rounded-2xl border border-white/5">
        {Object.entries(MODELS).map(([key, mod]) => (
          <button
            key={key}
            onClick={() => setModel(key)}
            className={cn(
              "flex-1 py-4 px-2 rounded-xl transition-all duration-500 flex flex-col items-center justify-center gap-1.5 relative group/mod",
              modelKey === key ? "bg-white/[0.04] shadow-lg" : "hover:bg-white/[0.01]"
            )}
          >
            <span className={cn(
              "text-[10px] font-black uppercase tracking-[0.2em] font-mono transition-colors",
              modelKey === key ? mod.color : "text-slate-600 group-hover/mod:text-slate-400"
            )}>
              {mod.name.split(' ')[0]}
            </span>
            <span className={cn(
              "text-[8px] uppercase tracking-[0.3em] font-light transition-colors",
              modelKey === key ? "text-slate-300" : "text-slate-700 group-hover/mod:text-slate-600"
            )}>
              {mod.label}
            </span>

            {modelKey === key && (
              <motion.div layoutId="active-bar" className={cn("absolute bottom-0 w-8 h-[2px] rounded-full", mod.accent)} />
            )}
          </button>
        ))}
      </div>
      <motion.div
        key={modelKey}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 overflow-y-auto custom-scroll pr-4 pb-12"
      >
        <div className={cn("mb-10 p-12 rounded-[3.5rem] border relative overflow-hidden group/insight shadow-2xl transition-all duration-700", m.glass)}>
          <div className={cn("absolute -top-20 -right-20 w-80 h-80 opacity-5 blur-[120px] rounded-full", m.bg)} />

          <div className="flex items-center gap-5 mb-12 border-b border-white/5 pb-8">
            <div className={cn("w-[2px] h-10 rounded-full", m.accent)} />
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black text-slate-700 uppercase tracking-[0.8em] font-mono italic">{m.provider} CONSEJERÍA</span>
              <h3 className="text-3xl font-[300] text-white uppercase tracking-tight italic font-display">{data.title}</h3>
            </div>
          </div>

          <div className="space-y-16">
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-2 rounded-lg bg-blue-500/5 text-blue-400">
                  <Activity size={14} />
                </div>
                <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.6em] font-mono italic">BRECHAS_ESTRATÉGICAS</h5>
              </div>
              <div className="grid gap-5">
                {data.oportunidades.map((op, i) => (
                  <div key={i} className="flex gap-6 p-7 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all group/item shadow-inner">
                    <div className={cn("w-1.5 h-1.5 rounded-full mt-2.5 transition-transform group-hover/item:scale-150 shadow-[0_0_12px_currentColor]", m.color)} />
                    <p className="text-[16px] text-slate-300/90 leading-relaxed font-[300] italic">{op}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-2 rounded-lg bg-emerald-500/5 text-emerald-400">
                  <Zap size={14} />
                </div>
                <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.6em] font-mono italic">GUÍAS_DE_ACCIÓN</h5>
              </div>
              <div className="grid gap-5">
                {data.estrategias.map((st, i) => (
                  <div key={i} className="flex gap-6 p-7 rounded-3xl bg-emerald-500/[0.02] border border-white/5 hover:border-emerald-500/10 transition-all group/item shadow-inner">
                    <div className={cn("w-1.5 h-1.5 rounded-full mt-2.5 transition-transform group-hover/item:scale-150 shadow-[0_0_12px_emerald]", m.color)} />
                    <p className="text-[16px] text-slate-300 font-[500] leading-relaxed italic opacity-90">{st}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <button
          onClick={() => setFullScreen(modelKey)}
          className="w-full h-16 rounded-2xl border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center gap-4 group/exp"
        >
          <Maximize2 size={12} className="group-hover/exp:scale-125 transition-transform" />
          VER PLAN DETALLADO
        </button>
      </motion.div>
    </div>
  );
};

const FullScreenModal = ({ modelKey, data, onClose }) => {
  const m = MODELS[modelKey];
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    { role: 'system', content: `Iniciando protocolo de consulta profunda para: "${data.title}"` }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!query.trim()) return;
    const newMsg = { role: 'user', content: query };
    setMessages(prev => [...prev, newMsg]);
    setQuery('');
    setIsTyping(true);

    // DYNAMIC MODEL RESPONSE SIMULATION
    setTimeout(() => {
      setIsTyping(false);
      let responseContent = "";

      if (modelKey === 'gemini') {
        responseContent = `ANÁLISIS ESTRUCTURAL COMPLETADO. He detectado 3 patrones ocultos en tu consulta "${newMsg.content}". Mi recomendación: Re-calcula la ecuación de valor usando la variable de 'Escasez Técnica'. Desplegando simulación de escenario...`;
      } else if (modelKey === 'claude') {
        responseContent = `EVALUACIÓN DE TONO FINALIZADA. Para abordar "${newMsg.content}", sugiero una aproximación de 'Empatía Táctica'. La resonancia emocional del cliente está bloqueada; usa la técnica de 'Espejeo' para bajar la guardia.`;
      } else {
        responseContent = `PROTOCOLO DE EJECUCIÓN ACTIVO. La instrucción "${newMsg.content}" requiere un cierre directo. He preparado 3 scripts de 'Alta Conversión' basados en el principio de Autoridad Asimétrica.`;
      }

      setMessages(prev => [...prev, {
        role: 'system',
        content: responseContent
      }]);
    }, 1500);
  };

  if (!modelKey) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] bg-[#010101]/95 backdrop-blur-3xl flex items-center justify-center p-8 md:p-16"
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }}
        className="w-full max-w-[1700px] h-full bg-[#030303] border border-white/10 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,1)] flex overflow-hidden relative"
      >
        {/* LEFT PROFILE PANEL */}
        <div className="w-[450px] border-r border-white/5 bg-white/[0.01] flex flex-col p-16 overflow-y-auto custom-scroll">
          <button onClick={onClose} className="mb-16 flex items-center gap-3 text-slate-500 hover:text-white transition-all group/back">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">VOLVER AL PANEL</span>
          </button>

          <div className="mb-16">
            <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/5 shadow-2xl transition-all duration-700", m.bg)}>
              {m.icon}
            </div>
            <h2 className="text-4xl font-intel text-white italic mb-4">
              {m.name} <span className="text-slate-500 opacity-50 font-normal">// SISTEMA</span>
            </h2>
            <p className="text-[12px] text-slate-500 font-medium uppercase tracking-[0.2em] mb-10 leading-relaxed">
              Análisis mediante {m.provider}. Conectado y operativo.
            </p>
            <div className="h-px w-32 bg-gradient-to-r from-emerald-500/50 to-transparent" />
          </div>

          <div className="space-y-12">
            <section>
              <h5 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] mb-6">INFORMACIÓN DEL CASO</h5>
              <div className="grid gap-4">
                {data.oportunidades.map((op, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-[15px] text-slate-400 font-light leading-relaxed">
                    {op}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* CHAT AREA */}
        <div className="flex-1 flex flex-col relative bg-black/20">
          <div className="flex-1 overflow-y-auto p-16 space-y-10 custom-scroll" ref={scrollRef}>
            <div className="flex justify-center py-10">
              <div className="px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] text-[9px] font-black text-slate-700 uppercase tracking-[0.3em] italic">
                CONSULTA SEGURA CON DUKE IA // {new Date().toLocaleTimeString()}
              </div>
            </div>

            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className={cn("flex gap-8", msg.role === 'user' ? "flex-row-reverse" : "")}
              >
                <div className={cn("w-10 h-10 rounded-xl shrink-0 flex items-center justify-center border border-white/10 mt-1", msg.role === 'user' ? "bg-slate-800" : m.bg)}>
                  {msg.role === 'user' ? <User size={18} /> : <Terminal size={18} />}
                </div>
                <div className={cn("flex flex-col gap-2 max-w-[70%]", msg.role === 'user' ? "items-end" : "items-start")}>
                  <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">
                    {msg.role === 'user' ? 'USUARIO' : 'DUKE IA'}
                  </span>
                  <div className={cn(
                    "p-8 rounded-3xl text-[17px] leading-relaxed font-light shadow-2xl",
                    msg.role === 'user' ? "bg-white/5 text-white rounded-tr-none" : "bg-black/40 text-slate-300 border border-white/5 rounded-tl-none"
                  )}>
                    {msg.content}
                  </div>
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <div className="flex gap-8">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center border border-white/10", m.bg)}>
                  <Terminal size={18} />
                </div>
                <div className="h-10 flex items-center gap-1.5 ml-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700 animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700 animate-pulse delay-150" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700 animate-pulse delay-300" />
                </div>
              </div>
            )}
          </div>

          {/* INPUT AREA */}
          <div className="p-16 border-t border-white/5 bg-white/[0.01]">
            <div className="flex gap-3 mb-8 overflow-x-auto pb-4 scrollbar-hide">
              {["Mejorar Táctica", "Resolver Objeción", "Ver Resumen", "Generar Mensaje"].map(act => (
                <button key={act} className="px-5 py-2 rounded-xl bg-white/5 border border-white/5 text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-white hover:border-white/20 transition-all">
                  {act}
                </button>
              ))}
            </div>
            <div className="relative group/input">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-[2rem] blur opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-1000" />
              <div className="relative flex items-center bg-[#050505] border border-white/10 rounded-[2rem] p-3 shadow-2xl h-20">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSend()}
                  placeholder="INTRODUCIR COMANDO ESTRATÉGICO..."
                  className="flex-1 bg-transparent px-8 outline-none text-white font-mono text-sm placeholder:text-slate-800"
                />
                <button onClick={handleSend} className={cn("h-14 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]", m.accent)}>
                  <span className="text-[10px] font-black text-black uppercase tracking-[0.3em]">ANALIZAR</span>
                  <ArrowUpRight size={16} className="text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const WarRoomModal = ({ scenario, onClose }) => {
  if (!scenario) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] flex items-center justify-center p-0 md:p-6 bg-black/95 backdrop-blur-3xl overflow-y-auto"
    >
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        className="w-full max-w-[1920px] min-h-[100vh] md:min-h-[90vh] flex flex-col pt-24 pb-24 px-10 md:px-20 relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_60%)] pointer-events-none" />

        <button
          onClick={onClose}
          className="fixed top-8 right-8 md:top-12 md:right-12 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all z-[310] group backdrop-blur-md"
        >
          <X size={28} className="group-hover:rotate-90 transition-transform" />
        </button>

        <div className="mb-20 border-l-4 border-emerald-500 pl-8 relative z-10">
          <span className="text-sm font-black text-emerald-500 uppercase tracking-[0.5em] mb-4 block font-mono">CONSEJO VIRTUAL // ANÁLISIS ESTRATÉGICO</span>
          <h3 className="text-5xl md:text-7xl font-display text-white tracking-widest uppercase italic leading-none">{scenario.label} <span className="text-white/20">// MESA DE CONTROL</span></h3>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 flex-1 relative z-10 pb-12">
          {Object.entries(MODELS).map(([key, m]) => (
            <div key={key} className={cn("rounded-[3rem] border p-10 md:p-12 flex flex-col shadow-2xl relative overflow-hidden bg-black/40 backdrop-blur-md", m.border)}>
              {/* Background Accent */}
              <div className={cn("absolute top-0 right-0 w-64 h-64 opacity-10 blur-[80px] rounded-full pointer-events-none", m.bg)} />

              <div className="flex items-center gap-4 mb-12">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg", m.bg)}>
                  {m.icon}
                </div>
                <div>
                  <span className={cn("text-xs font-black uppercase tracking-widest block mb-1", m.color)}>{m.provider}</span>
                  <h4 className="text-4xl font-black text-white uppercase italic leading-none">{scenario.council[key].title || m.name}</h4>
                </div>
              </div>

              <div className="space-y-16 overflow-y-auto custom-scroll pr-4 pb-4 flex-1">
                <section>
                  <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/5">
                    <div className={cn("w-1.5 h-6 rounded-full group-hover:h-8 transition-all duration-500", m.accent)} />
                    <span className="text-sm text-slate-400 font-black uppercase tracking-[0.3em]">Oportunidades</span>
                  </div>
                  <div className="space-y-8">
                    {scenario.council[key].oportunidades.map((op, i) => (
                      <div key={i} className="flex gap-6 p-7 rounded-3xl bg-white/[0.02] border border-white/5 text-[15px] text-slate-300 font-normal leading-relaxed hover:border-white/10 transition-colors group/card">
                        <div className={cn("w-2 h-2 rounded-full mt-2.5 shrink-0 shadow-[0_0_10px_currentColor] group-hover/card:scale-150 transition-transform", m.color)} />
                        {op}
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/5">
                    <div className={cn("w-1.5 h-6 rounded-full group-hover:h-8 transition-all duration-500", m.accent)} />
                    <span className="text-sm text-slate-400 font-black uppercase tracking-[0.3em]">Tácticas de Cierre</span>
                  </div>
                  <div className="space-y-8">
                    {scenario.council[key].estrategias.map((st, i) => (
                      <div key={i} className="flex gap-6 p-7 rounded-3xl bg-white/[0.02] border border-white/5 text-[15px] text-slate-300 font-normal leading-relaxed hover:border-white/10 transition-colors group/card">
                        <Zap size={20} className={cn("shrink-0 mt-1 transition-transform group-hover/card:rotate-12", m.color)} />
                        {st}
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const StrategicAsset = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('SCRIPT');
  const [loading, setLoading] = useState(false);

  // Mock variations based on the current data content for demo purposes
  // In a real app, these would come from the backend or the scenario object
  const getContent = () => {
    if (activeTab === 'SCRIPT') return data.content;
    if (activeTab === 'VOICE') return `ESTRUCTURA DE NOTA DE VOZ (15s):

1. TONO: Calmado, Lento, Autoridad Total (Bajar el tono al final de las frases).
2. APERTURA: "Hola ${data.title.split(' ')[0] || 'Cliente'}, seré muy breve..."
3. EL GANCHO: [Mencionar el dato duro de AirDNA o la liberación de la unidad].
4. CIERRE ABIERTO: "Te dejo el dato. Si te resuena, avísame. Si no, seguimos."

(No pedir llamada. No pedir confirmación. Solo entregar valor y retirar la atención).`;
    if (activeTab === 'PRINCIPIO') return `PRINCIPIO PSICOLÓGICO: "LA LEY DEL DESAPEGO"

El cliente huele la "necesidad de venta" (Commission Breath) a kilómetros.
Tu objetivo con este mensaje no es vender, es DEMOSTRAR que no necesitas la venta.

ALTA JERARQUÍA vs BAJA JERARQUÍA:
- Baja: "¿Ya lo pudiste ver? Avísame."
- Alta: "Libero la unidad hoy. Te aviso por transparencia."

Usa este principio para redactar tu propia versión. Sé auténtico, pero mantén el marco de poder.`;
    return data.content;
  };

  const handleRegenerate = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 800);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getContent());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-[3rem] bg-[#030303] border border-white/10 flex flex-col h-full hover:border-emerald-500/30 transition-all duration-700 shadow-3xl relative overflow-hidden group/deliverable">

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/[0.02] blur-[100px] rounded-full pointer-events-none" />

      {/* HEADER: COMPACT & TECHNICAL */}
      <div className="p-8 pb-6 border-b border-white/5 flex justify-between items-start relative z-10">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3 mb-1">
            <div className="px-2 py-0.5 rounded text-[8px] font-black bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 tracking-widest uppercase font-mono">
              {data.version}
            </div>
            <span className="text-[8px] font-black text-slate-600 uppercase tracking-[0.2em] font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Fase de Ejecución
            </span>
          </div>
          <h3 className="text-white font-[400] text-2xl uppercase tracking-tight font-display leading-none mt-1">
            {data.title.split('//')[0]}
            <span className="block text-sm text-emerald-500/60 font-mono mt-1 tracking-widest italic">{data.title.split('//')[1] || '// ESTRATEGIA PURA'}</span>
          </h3>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-2">
          <button onClick={handleRegenerate} className="h-9 px-4 rounded-lg bg-white/5 border border-white/5 text-[9px] font-black text-slate-400 uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all flex items-center gap-2">
            <RefreshCw size={12} className={cn(loading && "animate-spin")} />
            <span className="hidden xl:inline">Variante</span>
          </button>
          <button onClick={handleCopy} className="h-9 w-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all">
            {copied ? <CheckCircle2 size={14} /> : <ClipboardList size={14} />}
          </button>
        </div>
      </div>

      {/* TABS FOR DIFFERENT ANGLES */}
      <div className="px-8 flex gap-6 border-b border-white/5 relative z-10">
        {['SCRIPT', 'VOICE', 'PRINCIPIO'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "py-4 text-[9px] font-black uppercase tracking-[0.2em] border-b-2 transition-all font-mono",
              activeTab === tab ? "border-emerald-500 text-emerald-400" : "border-transparent text-slate-600 hover:text-slate-400"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENT AREA: HIGH VALUE DISPLAY */}
      <div className="flex-1 p-8 relative overflow-hidden group/text bg-[#010101]">
        <div className={cn(
          "absolute inset-0 bg-white/[0.01] transition-opacity duration-500",
          loading ? "opacity-100 z-20 flex items-center justify-center backdrop-blur-sm" : "opacity-0 pointer-events-none z-[-1]"
        )}>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
            <span className="text-[8px] uppercase tracking-widest text-emerald-500 font-mono">Optimizando Táctica...</span>
          </div>
        </div>

        <div className="h-full rounded-2xl border border-white/5 bg-[#050505] p-6 relative overflow-y-auto custom-scroll shadow-inner">
          {/* DECORATIVE LINES */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
          <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent" />

          <div className="relative z-10 font-sans text-[15px] leading-loose text-slate-300 font-light whitespace-pre-line tracking-wide">
            {getContent()}
          </div>

          {/* WATERMARK */}
          <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center opacity-40">
            <span className="text-[8px] font-mono tracking-widest uppercase text-slate-600">DUKESYSTEM // PROPIEDAD INTELECTUAL</span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" className="h-3 opacity-0" /> {/* Spacer */}
            <Lock size={10} className="text-slate-600" />
          </div>
        </div>
      </div>

      {/* FOOTER CALL TO ACTION */}
      <div className="p-4 bg-white/[0.01] border-t border-white/5">
        <button className="w-full py-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-emerald-500 text-[9px] font-black uppercase tracking-[0.3em] hover:bg-emerald-500 hover:text-black transition-all flex items-center justify-center gap-3 group/cta">
          <span>Generar Más Variantes</span>
          <ArrowUpRight size={12} className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
        </button>
      </div>

    </div>
  );
};


// --- MAIN APP ---

export default function StratosEngine() {
  const [tab, setTab] = useState(0);
  const [model, setModel] = useState('gpt4');
  const [live, setLive] = useState(true);
  const [workspace, setWorkspace] = useState('intelligence');
  const [fullScreenModel, setFullScreenModel] = useState(null);
  const [warRoom, setWarRoom] = useState(false);
  const [showAllClients, setShowAllClients] = useState(false);

  // KEYBOARD SHORTCUTS FOR EFFICIENCY
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key >= '1' && e.key <= '5') {
        setTab(parseInt(e.key) - 1);
      }
      if (e.key === 'i') setWorkspace('intelligence');
      if (e.key === 'c') setWorkspace('crm');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scenario = SCENARIOS[tab];

  return (
    <div className="min-h-screen bg-[#020202] text-slate-200 selection:bg-blue-500/30 font-sans relative">

      <Header live={live} setLive={setLive} workspace={workspace} setWorkspace={setWorkspace} />

      <main className="relative z-10 flex flex-col min-h-screen">
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />
        <div className="fixed inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <AnimatePresence mode="wait">
          {fullScreenModel && (
            <FullScreenModal
              modelKey={fullScreenModel}
              data={scenario.council[fullScreenModel]}
              onClose={() => setFullScreenModel(null)}
            />
          )}
          {warRoom && (
            <WarRoomModal
              scenario={scenario}
              onClose={() => setWarRoom(false)}
            />
          )}
          {showAllClients && (
            <div className="fixed inset-0 z-[300] flex items-center justify-center p-8 backdrop-blur-md">
              <div
                className="absolute inset-0 bg-black/80"
                onClick={() => setShowAllClients(false)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-[900px] h-[80vh] bg-[#020202] rounded-[3rem] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
              >
                {/* HEADER */}
                <div className="p-12 pb-8 flex items-center justify-between border-b border-white/5 bg-white/[0.01]">
                  <div>
                    <span className="text-[10px] font-intel text-emerald-500 uppercase tracking-[0.4em] font-mono block mb-3">DUKE PRIVATE NETWORK</span>
                    <h3 className="text-4xl font-[300] text-white font-display tracking-tight uppercase">Base de Activos Globales</h3>
                  </div>
                  <button
                    onClick={() => setShowAllClients(false)}
                    className="w-12 h-12 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center text-slate-500 hover:bg-white/10 hover:text-white transition-all hover:scale-110"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* LIST */}
                <div className="p-10 overflow-y-auto custom-scroll flex-1 grid grid-cols-1 gap-4 content-start">
                  {CLIENTS.map((c) => (
                    <div
                      key={c.id}
                      onClick={() => {
                        setActiveClient(c);
                        setShowAllClients(false);
                      }}
                      className="group p-6 rounded-[2.5rem] bg-[#050505] border border-white/5 hover:border-white/20 hover:bg-[#080808] transition-all cursor-pointer relative overflow-hidden flex items-center gap-8"
                    >
                      {/* Interactive Highlight */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/0 group-hover:bg-emerald-500 transition-all duration-500" />

                      {/* Avatar & Flag */}
                      <div className="relative shrink-0">
                        <img src={c.avatar} alt="" className="w-20 h-20 rounded-3xl object-cover transition-all duration-700 shadow-2xl" />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center text-xl shadow-lg">
                          {c.flag}
                        </div>
                      </div>

                      {/* Info Core */}
                      <div className="flex-1 grid grid-cols-12 gap-8 items-center">

                        {/* Name & Stage */}
                        <div className="col-span-5">
                          <h4 className="text-xl font-[500] text-white tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">{c.name}</h4>
                          <div className="flex items-center gap-3">
                            <span className={cn("px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest border", c.stageColor)}>
                              {c.stage}
                            </span>
                            <span className="text-[10px] text-slate-600 font-mono tracking-widest">{c.status.replace(/_/g, ' ')}</span>
                          </div>
                        </div>

                        {/* Value */}
                        <div className="col-span-2">
                          <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest block mb-1">Valor</span>
                          <span className="text-lg font-mono text-white/90">{c.value}</span>
                        </div>

                        {/* Needs */}
                        <div className="col-span-5 pl-8 border-l border-white/5">
                          <div className="flex items-start gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                            <AlertTriangle size={14} className="text-amber-500 mt-0.5 shrink-0" />
                            <div className="flex flex-col">
                              <span className="text-[8px] font-black text-amber-500 uppercase tracking-widest mb-0.5">Acción Requerida</span>
                              <span className="text-[11px] font-medium text-slate-300 leading-snug">{c.needs}</span>
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Arrow */}
                      <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-slate-600 group-hover:text-white group-hover:border-white/20 transition-all">
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  ))}

                  {/* ADD NEW BUTTON */}
                  <button className="w-full py-8 rounded-[2rem] border border-white/5 border-dashed bg-white/[0.005] hover:bg-white/[0.02] hover:border-white/10 transition-all flex items-center justify-center gap-4 group/add mt-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover/add:bg-emerald-500 group-hover/add:text-black transition-all">
                      <Users size={16} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 group-hover/add:text-white transition-colors font-mono">
                      + Agregar Nuevo Expediente
                    </span>
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {workspace === 'intelligence' ? (
            <motion.div
              key="intel-view"
              initial={{ opacity: 0, filter: 'blur(30px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(30px)' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[1900px] mx-auto w-full pt-32 pb-64 px-8 xl:px-16"
            >
              {/* Header Info */}
              <div className="flex flex-col xl:flex-row justify-between items-end mb-20 gap-8">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-intel text-blue-500 uppercase tracking-[0.5em]">PROTOCOL_GS_v1.0</span>
                    <div className="h-px w-8 bg-blue-500/30" />
                    <span className="text-[9px] font-intel text-slate-600 uppercase tracking-widest">ESTADO: EN_OPERACIÓN_MAESTRA</span>
                  </div>
                  <h2 className="text-3xl xl:text-4xl font-intel text-white tracking-widest uppercase italic leading-none flex items-baseline gap-4">
                    {scenario.title.split(' // ')[0]}
                    <span className="h-4 w-px bg-white/10" />
                    <span className="text-slate-700 font-light text-xl tracking-tighter uppercase italic">{scenario.title.split(' // ')[1]}</span>
                  </h2>
                  <div className="mt-6 max-w-3xl">
                    <p className="text-lg font-light text-slate-300 leading-relaxed font-sans">
                      {scenario.description}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="px-8 py-5 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col items-center shadow-xl backdrop-blur-md hover:border-blue-500/20 transition-all group">
                    <span className="text-[9px] font-intel text-slate-500 uppercase tracking-[0.2em] mb-2 block group-hover:text-blue-500 transition-colors whitespace-nowrap">{scenario.metrics.label}</span>
                    <span className="text-3xl font-intel text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">{scenario.metrics.impact}</span>
                  </div>
                  <div className="px-8 py-5 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col items-center shadow-xl backdrop-blur-md hover:border-emerald-500/20 transition-all group">
                    <span className="text-[9px] font-intel text-slate-500 uppercase tracking-[0.2em] mb-2 block group-hover:text-emerald-500 transition-colors whitespace-nowrap">{scenario.metrics.statusLabel}</span>
                    <span className="text-3xl font-intel text-emerald-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">{scenario.metrics.status}</span>
                  </div>
                </div>
              </div>

              {/* Main 3-Column Grid */}
              {/* WIDE PRO LAYOUT - 2 COLUMNS */}
              <div className="grid grid-cols-12 gap-8 xl:gap-12 items-stretch min-h-[850px]">
                {/* INTELLIGENCE CORE (Expanded) */}
                <div className="col-span-12 xl:col-span-7 h-full">
                  <CouncilInsight
                    modelKey={model}
                    setModel={setModel}
                    data={scenario.council[model]}
                    inputData={scenario.input}
                    setFullScreen={setFullScreenModel}
                    onShowAllClients={() => setShowAllClients(true)}
                  />
                </div>
                {/* DELIVERABLE ASSET */}
                <div className="col-span-12 xl:col-span-5 h-full">
                  <StrategicAsset data={scenario.output} />
                </div>
              </div>

            </motion.div>
          ) : (
            <div className="max-w-[1900px] mx-auto w-full pt-20 pb-64 px-8 xl:px-16">
              {/* HEADER - CRITICAL COLOR RESET */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-intel text-emerald-500/80 tracking-[0.3em] italic">SISTEMA NEXUS v9.5</span>
                  <div className="h-px w-8 bg-white/10" />
                  <span className="text-[9px] font-intel text-slate-600 tracking-widest">PANEL DIRECTIVO DE RED</span>
                </div>
                <h2 className="text-3xl xl:text-4xl font-intel text-white leading-none flex items-baseline gap-4">
                  MONITOREO <span className="text-blue-500/40 font-light text-2xl tracking-tighter italic">// ESTRATÉGICO</span>
                </h2>
                <div className="mt-4 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em] leading-none">
                    // Visualización de KPIs globales y análisis de inteligencia en tiempo real.
                  </p>
                </div>
              </div>

              {/* 1. TOP: STRATEGIC METRICS (Serious Styling) */}
              <div className="grid grid-cols-4 gap-8 mb-16">
                {[
                  { label: 'Volumen Bruto (YTD)', value: '$142.8M', trend: '+12%', color: 'text-white' },
                  { label: 'Tasa de Cierre Global', value: '34.2%', trend: '+4.5%', color: 'text-emerald-400' },
                  { label: 'Deals Activos (>90%)', value: '18', trend: 'Estable', color: 'text-blue-400' },
                  { label: 'Ciclo de Venta Promedio', value: '42 Días', trend: '-8 Días', color: 'text-white' }
                ].map((metric, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-[#050505] border border-white/5 shadow-2xl hover:border-white/10 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight size={18} className="text-white opacity-40" />
                    </div>
                    <span className="text-[9px] font-intel text-slate-600 uppercase tracking-[0.3em] mb-3 block group-hover:text-white transition-colors">{metric.label}</span>
                    <div className={cn("text-4xl font-intel tracking-tight", metric.color)}>{metric.value}</div>
                    <div className="mt-3">
                      <span className="text-[10px] font-bold text-emerald-500/80 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">{metric.trend}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* 2. MIDDLE: AI COUNCIL (Directive Intelligence) */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8 ml-2">
                  <div className="h-px w-6 bg-blue-500/30" />
                  <h4 className="text-[11px] font-intel text-white/50 uppercase tracking-[0.4em]">CONSEJO DE IA REPORTANDO</h4>
                </div>
                <div className="grid grid-cols-3 gap-8">
                  {Object.entries(MODELS).map(([key, m]) => (
                    <div key={key} className={cn("p-8 rounded-[2.5rem] border bg-[#030303] flex flex-col gap-6 transition-all hover:border-white/20 group/council relative overflow-hidden shadow-3xl", m.border)}>
                      <div className="flex items-center gap-5 relative z-10">
                        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center border border-white/5 shadow-inner", m.bg)}>
                          {m.icon}
                        </div>
                        <div>
                          <span className={cn("text-[11px] font-intel tracking-[0.2em] block", m.color)}>{m.name}</span>
                          <span className="text-[9px] text-slate-600 font-intel tracking-widest">{m.label}</span>
                        </div>
                      </div>

                      <div className="space-y-4 relative z-10">
                        <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/5 group-hover/council:bg-white/[0.04] transition-colors">
                          <div className="flex items-center gap-2 mb-2">
                            <div className={cn("w-1 h-3 rounded-full", m.accent)} />
                            <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">FUNCIÓN DIRECTIVA</span>
                          </div>
                          <p className="text-[12px] text-slate-300 font-medium leading-relaxed italic">
                            {key === 'gemini' ? "Predicción de tendencias de mercado y auditoría de diálogos comerciales." :
                              key === 'claude' ? "Análisis de resonancia emocional y calibración de tono para perfiles de alto valor." :
                                "Optimización de guiones de cierre y despliegue de protocolos de respuesta."}
                          </p>
                        </div>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5 relative z-10">
                        <span className="text-[9px] font-bold text-slate-700 tracking-tighter uppercase italic">ESTABILIDAD DE NODO</span>
                        <div className="flex items-center gap-2">
                          <div className={cn("w-1.5 h-1.5 rounded-full animate-ping", m.accent.replace('bg-', 'bg-'))} />
                          <span className="text-[10px] font-black text-white italic">OPERATIVO</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. LOWER: CHARTS & TEAM PERFORMANCE */}
              <div className="grid grid-cols-12 gap-12 mb-20">
                {/* INCOME PROJECTION CHART (Serious Styling) */}
                <div className="col-span-12 xl:col-span-7 p-12 rounded-[3.5rem] bg-[#050505] border border-white/5 h-[650px] flex flex-col shadow-2xl relative overflow-hidden group/chart">
                  <div className="flex flex-col gap-8 mb-12 relative z-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-intel text-white italic flex items-center gap-4">
                        <BarChart size={32} className="text-blue-500" /> Proyección de Ingreso
                      </h3>
                      <div className="flex bg-white/5 p-1 rounded-2xl">
                        {['MENSUAL', 'TRIMESTRAL (Q3)', 'ANUAL'].map((t, i) => (
                          <button key={t} className={cn("px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all", i === 1 ? "bg-white text-black shadow-xl" : "text-slate-500 hover:text-white")}>
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-end relative">
                    <div className="flex-1 flex items-end gap-6 px-6 mb-8">
                      {[55, 82, 45, 95, 70, 88].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col gap-3 group/bar cursor-help">
                          <span className="text-[10px] font-mono text-emerald-400 text-center opacity-0 group-hover/bar:opacity-100 transition-opacity font-bold">+{h}K</span>
                          <div className="w-full bg-white/[0.01] border border-white/5 rounded-t-lg relative overflow-hidden h-[250px] group-hover/bar:border-white/10 transition-all">
                            {/* Serious Solid Color Bars */}
                            <motion.div initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }} className="absolute bottom-0 inset-x-0 bg-[#e5e5e5] group-hover/bar:bg-blue-500 duration-500" />
                          </div>
                          <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest text-center group-hover/bar:text-white transition-colors">SEM {i + 1}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 border-t border-white/5 pt-8 bg-white/[0.01] -mx-12 px-12 pb-4">
                      <div className="flex items-center gap-3 mb-4">
                        <Lightbulb size={16} className="text-emerald-500" />
                        <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">INSIGHT DE INTELIGENCIA</span>
                      </div>
                      <p className="text-[14px] text-slate-400 font-medium leading-relaxed max-w-2xl italic">
                        "La estabilización del Q3 proyecta un excedente de liquidez del 14%. Se recomienda la apertura de un fondo de reserva institucional para mitigar la volatilidad en el Q4."
                      </p>
                    </div>
                  </div>
                </div>

                {/* TALENT MONITOR (Right Column) */}
                <div className="col-span-12 xl:col-span-5 p-12 rounded-[3.5rem] bg-[#050505] border border-white/5 h-[650px] flex flex-col shadow-2xl overflow-y-auto custom-scroll relative">
                  <h3 className="text-3xl font-intel text-white italic mb-12 flex items-center gap-6">
                    <Users size={32} className="text-white" /> Monitoreo de Talento
                  </h3>
                  <div className="space-y-6">
                    {SELLERS.map((seller, i) => (
                      <div key={i} className="p-8 rounded-[2.5rem] bg-black border border-white/5 hover:border-white/10 hover:bg-white/[0.01] transition-all group relative overflow-hidden">
                        <div className="flex items-start gap-6 relative z-10">
                          <img src={seller.avatar} alt="" className="w-20 h-20 rounded-[1.5rem] object-cover border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl" />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-6">
                              <div>
                                <h4 className="text-xl font-bold text-white tracking-tight">{seller.name}</h4>
                                <span className="text-[10px] bg-white/5 px-3 py-1 rounded-full text-slate-400 font-medium tracking-widest mt-1 inline-block border border-white/5">{seller.role.toUpperCase()}</span>
                              </div>
                              <div className="text-right">
                                <span className={cn("text-2xl font-intel block leading-none", seller.status === 'Risk' ? "text-red-500" : "text-emerald-500")}>{seller.score}</span>
                                <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest mt-1 block">TRUST SCORE</span>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-white/[0.01] p-4 rounded-2xl border border-white/5">
                                <span className="text-[9px] text-slate-500 font-black uppercase block mb-1">RENTABILIDAD</span>
                                <span className={cn("text-[16px] font-bold", seller.roi.includes('-') ? "text-red-400" : "text-emerald-500")}>{seller.roi}</span>
                              </div>
                              <div className="bg-white/[0.01] p-4 rounded-2xl border border-white/5">
                                <span className="text-[9px] text-slate-500 font-black uppercase block mb-1">COACHING POINT</span>
                                <span className="text-[11px] font-medium text-white/70 block leading-tight">{seller.weakness}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4. BOTTOM: INFRASTRUCTURE & CRM SYNC (Minimalist) */}
              <div className="mb-32">
                <div className="flex items-center gap-3 mb-8 ml-2">
                  <div className="h-px w-6 bg-white/10" />
                  <h4 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em]">INFRAESTRUCTURA Y CONECTIVIDAD</h4>
                </div>
                <div className="grid grid-cols-3 gap-8">
                  {['Salesforce', 'HubSpot', 'GoHighLevel'].map((crm) => (
                    <div key={crm} className="p-8 rounded-[2rem] border border-white/5 bg-black flex items-center justify-between group hover:border-white/10 transition-all cursor-default">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/[0.02] flex items-center justify-center text-slate-500 group-hover:text-white border border-white/5 transition-all">
                          <Layers size={22} />
                        </div>
                        <div>
                          <span className="text-[10px] font-black text-slate-700 uppercase tracking-[0.2em] block group-hover:text-slate-500 transition-colors">RED CONECTADA</span>
                          <span className="text-lg font-bold text-white/80 uppercase tracking-widest group-hover:text-white transition-colors">{crm}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-[9px] font-bold text-emerald-500/60 font-mono tracking-tighter">DATA SYNCED</span>
                        <div className="flex gap-1">
                          {[1, 2, 3].map(i => <div key={i} className="w-1 h-3 rounded-full bg-emerald-500/20" />)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>

        {workspace === 'intelligence' && (
          <FloatingDock
            active={tab}
            setTab={setTab}
            scenarios={SCENARIOS}
            visible={!fullScreenModel && !warRoom}
          />
        )}
      </main>

      <footer className="fixed bottom-0 w-full h-10 flex items-center justify-between px-10 bg-black/80 backdrop-blur-3xl border-t border-white/5 z-50">
        <div className="flex gap-8 text-[8px] font-black text-slate-700 uppercase tracking-[0.2em] font-mono italic">
          <span className="flex items-center gap-2 opacity-40"><Wifi size={10} /> ENCRIPTADO::RSA-8K</span>
          <span className="flex items-center gap-2 opacity-40"><Lock size={10} /> CUMPLIMIENTO::DUKESYSTEM_MAESTRO</span>
        </div>
        <span className="">NÚCLEO_DUKESYSTEM_v9.1.0</span>
      </footer>
    </div>
  );
}
