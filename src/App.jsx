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
  Waves
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

// --- UTILS ---
function cn(...inputs) { return twMerge(clsx(inputs)); }

// --- CONFIG & VALUE DATA ---
const MODELS = {
  gemini: {
    name: "GEMINI QUANTUM",
    label: "ARQUITECTO",
    provider: "DEEPMIND RESEARCH",
    icon: <Database size={14} />,
    color: "text-blue-400",
    bg: "bg-blue-500/5",
    border: "border-blue-500/20",
    accent: "bg-blue-500"
  },
  claude: {
    name: "CLAUDE PRISMATIC",
    label: "ESTRATEGA",
    provider: "ANTHROPIC LABS",
    icon: <Shield size={14} />,
    color: "text-amber-400",
    bg: "bg-amber-500/5",
    border: "border-amber-500/20",
    accent: "bg-amber-500"
  },
  gpt4: {
    name: "GPT-4 OMNI",
    label: "OPERADOR",
    provider: "OPENAI ELITE",
    icon: <Zap size={14} />,
    color: "text-emerald-400",
    bg: "bg-emerald-500/5",
    border: "border-emerald-500/20",
    accent: "bg-emerald-500"
  }
};

const CLIENTS = [
  { id: 'c1', name: 'Roberto García', status: 'Indeciso', value: '$5.2M', tag: 'VIP', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', email: 'roberto.g@inversion.com' },
  { id: 'c2', name: 'Laura Méndez', status: 'Cierre', value: '$3.8M', tag: 'HOT', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', email: 'laura.m@patrimonio.mx' },
  { id: 'c3', name: 'Javier B.', status: 'Seguimiento', value: '$4.5M', tag: 'WARM', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop', email: 'javier.b@elite.com' }
];

const SCENARIOS = [
  {
    id: 'cierre',
    label: 'PROTOCOL // CLOSING',
    title: 'Cierre Maestro // Matriz de Decisión',
    description: 'Protocolo de alta conversión para transformar prospectos indecisos en clientes activos mediante lógica estratégica irrefutable.',
    metrics: { impact: '92%', label: 'PROBABILIDAD_CIERRE', status: 'Optimizado', statusLabel: 'DUKESYSTEM_v4' },
    input: {
      source: 'CRM ESTRATÉGICO',
      id: 'OP_ROBERTO_G_01',
      title: 'CASO: ROBERTO GARCÍA',
      meta: 'Monto: $5.2M // Estatus: Indeciso',
      content: `[ANÁLISIS DE PERFIL]
• Roberto es un inversor conservador con aversión al riesgo.
• Ha detectado señales de interés pero teme la volatilidad.
• Su "Punto de Gatillo": La protección inflacionaria.

[ESTRATEGIA DUKESYSTEM]
No vendemos lujo; vendemos blindaje patrimonial. La narrativa debe girar en torno al "Costo de Oportunidad Perdido".`
    },
    council: {
      gemini: {
        title: "Estratega de Conversión",
        oportunidades: ["Roberto busca seguridad. Muestra el historial de plusvalía.", "Usa la escasez: 'Solo quedan 2 unidades con esta vista'."],
        estrategias: ["Guión: 'El Protocolo de Protección Patrimonial'.", "Oferta: Gastos notariales bonificados solo por cierre en 48h.", "Ultimátum elegante."],
        metodologias: ["Marco: Cierre por Incentivo Límite.", "Técnica: El Doble Vínculo."]
      },
      claude: {
        title: "Analista de Riesgo",
        oportunidades: ["Valida su miedo a la inflación para posicionar el ladrillo.", "Elimina la presión de venta, pon la presión en el mercado."],
        estrategias: ["'Roberto, mi trabajo es asegurar que tu dinero trabaje para ti'.", "Comparativa: Ladrillo vs Divisas (24 meses)."],
        metodologias: ["Marco: Seguridad Financiera.", "Técnica: La Escalera de Riesgo."]
      },
      gpt4: {
        title: "Director de Cierre",
        oportunidades: ["Cierre Binario: Firma hoy o pierde el precio 2024."],
        estrategias: ["'Tengo autorización para congelar el precio solo hoy'.", "Generar pérdida inminente legítima."],
        metodologias: ["Marco: Alta Conversión.", "Técnica: El Ultimátum Elegante."]
      }
    },
    output: {
      label: 'ACTIVO DE CIERRE MAESTRO',
      version: 'PROTOCOLO_FINANCIERO_v1.0',
      title: 'LA MATRIZ DE DECISIÓN FINANCIERA',
      content: `OBJETIVO: Cerrar a Roberto transformando la propiedad en un Instrumento Financiero.

FRASE DE APERTURA (El Gancho):
"Roberto, estuve auditando los números. Olvidemos el departamento por un segundo. Quiero hablar de cómo blindar esos $5M contra la inflación de este año."

LA LÓGICA IRREFUTABLE (El Cuerpo):
"Si dejamos ese capital en el banco, pierdes 7% de poder adquisitivo. Si lo ponemos en el Lote 402, ganamos 14% de plusvalía garantizada por contrato. La diferencia es de $1.2 Millones en tu bolsillo en 24 meses. La decisión no es comprar o no comprar, es: ¿quieres ganar ese millón o dejarlo ir?"`
    }
  },
  {
    id: 'voice',
    label: 'RETELL AI // ANALYSIS',
    title: 'Análisis de Voz // Neutralización de Objeciones',
    description: 'Detección en tiempo real de patrones de duda y sugerencias tácticas para blindar el valor ante comparativas de mercado.',
    metrics: { impact: '100%', label: 'VALOR_PERCIBIDO', status: 'Blindado', statusLabel: 'OBJECIÓN_NEUTRALIZADA' },
    input: {
      source: 'RETELL AUDIO STREAM',
      id: 'TRANS_VIVO_04',
      title: 'OBJECIÓN DE PRECIO',
      meta: 'Detección: PRECIO vs COMPETENCIA',
      content: `[TRANSCRITO]
Cliente: "Me gusta mucho, pero la torre de enfrente me ofrece lo mismo por 10% menos. Y me regalan las escrituras."

[DIAGNÓSTICO RETELL]
• El cliente no ve diferencia de valor, solo de precio.
• El competidor está usando "trucos" para parecer barato.
• RIESGO: Si bajas el precio, pierdes autoridad ante el cliente VIP.`
    },
    council: {
      gemini: {
        title: "Analista de Mercado",
        oportunidades: ["La competencia usa materiales clase C.", "Su 'regalo' se oculta en una tasa de interés inflada."],
        estrategias: ["Desglose forense de acabados.", "Calcular costo de mantenimiento a 5 años (Competencia es 30% más cara)."],
        metodologias: ["Marco: Educación de Calidad.", "Técnica: La Comparación Injusta."]
      },
      claude: {
        title: "Estratega de Confianza",
        oportunidades: ["Posiciónate como el protector del patrimonio del cliente.", "Usa la honestidad radical: 'Lo barato sale caro'."],
        estrategias: ["'Yo no te vendería eso ni a mi madre'.", "Explicar el truco de las escrituras gratis."],
        metodologias: ["Marco: Integridad Radical.", "Técnica: El Faro de Confianza."]
      },
      gpt4: {
        title: "Cerrador de Valor",
        oportunidades: ["No te defiendas, ataca la lógica del descuento.", "Muestra que el descuento es señal de desesperación."],
        estrategias: ["'Si ellos bajan el precio así, es que no confían en su producto'.", "Resaltar las garantías de nuestra constructora."],
        metodologias: ["Marco: Alto Estatus.", "Técnica: El Escudo de Valor."]
      }
    },
    output: {
      label: 'GUIÓN DE DEFENSA DE VALOR',
      version: 'ESCUDO_PRECIO_v2.1',
      title: 'EL GUIÓN "LO BARATO SALE CARO"',
      content: `[CALIBRACIÓN: Tono tranquilo, seguro, casi de lástima por la competencia]

RESPUESTA MAESTRA:
"Luis, entiendo. De hecho, si yo tuviera esos acabados y esa ubicación, yo también tendría que regalar las escrituras para poder vender. Nadie regala dinero. Ellos te ahorran $50k hoy, pero te costará $200k en mantenimiento. Yo prefiero que te duela un poco el precio hoy, a que me odies en 5 años porque tu inversión no creció."`
    }
  },
  {
    id: 'audit',
    label: 'CRM // RECOVERY',
    title: 'Recuperación de Cliente // Auditoría Forense',
    description: 'Protocolo para rescatar ventas que han dejado de responder mediante técnicas de "Takeaway" y aporte de valor asincrónico.',
    metrics: { impact: '$84,000 USD', label: 'COMISIÓN_RECUPERABLE', status: 'Crítico', statusLabel: 'RE-CONEXIÓN_PENDIENTE' },
    input: {
      source: 'HUB_NEXO_SYNC',
      id: 'CASO_JAVIER_B_LOST',
      title: 'AUTOPSIA DE CONTACTO',
      meta: 'Estado: Ghosting (4 días)',
      content: `[GHOSTING DETECTADO]
Vendedor: "¿Qué pensaste de la propuesta?" (Visto)
Vendedor: "Hola, ¿alguna duda?" (Sin respuesta)

[DIAGNÓSTICO DUKESYSTEM]
• Error: El vendedor está pidiendo atención en lugar de dar valor.
• Solución: Cambiar drásticamente el patrón de comunicación.`
    },
    council: {
      gemini: {
        title: "Estratega de Rescate",
        oportunidades: ["Javier cree que quieres venderle, no ayudarle.", "Necesitas un mensaje de 'Ruptura de Patrón'."],
        estrategias: ["Enviar noticia relevante de plusvalía en la zona.", "Técnica de la 'Renuncia Elegante'."],
        metodologias: ["Marco: Dar antes de Recibir.", "Técnica: El Takeaway."]
      },
      claude: {
        title: "Consultor de Valor",
        oportunidades: ["Aporta un dato de mercado exclusivo.", "Envía una visualización de avance de obra."],
        estrategias: ["'Javier, acaban de subir la grúa al piso 10, va a volar esto'.", "Nota de voz rápida y casual: 'Vi esto y pensé en ti'."],
        metodologias: ["Marco: Aporte de Valor.", "Técnica: El Recordatorio Invisible."]
      },
      gpt4: {
        title: "Negociador de Ruptura",
        oportunidades: ["Usa el 'Correo del Adiós' para forzar una respuesta."],
        estrategias: ["'Javier, asumo que el proyecto ya no es prioridad, cerraré tu expediente'."],
        metodologias: ["Marco: Escasez de Tiempo.", "Técnica: El Takeaway del Expediente."]
      }
    },
    output: {
      label: 'MENSAJE DE RE-CONEXIÓN',
      version: 'PROTOCOLO_LÁZARO_v4',
      title: 'ESTRATEGIA DE GOLPE DE VALOR',
      content: `"Javier, no he sabido de ti y no quiero ser el vendedor molesto. Voy a asumir que el momento no es el correcto y cerraré tu expediente por ahora para enfocarme en clientes activos. Si en el futuro cambia tu situación, aquí estaré. Un abrazo."`
    }
  },
  {
    id: 'retell_script',
    label: 'RETELL AI // SCRIPTING',
    title: 'Guión Dinámico // Estrategia de Voz Live',
    description: 'Generación automática de guiones de cierre basados en el análisis emocional y de tono procesado por Retell AI.',
    metrics: { impact: '94%', label: 'PRECISIÓN_VOZ', status: 'Activo', statusLabel: 'RETELL_VOZ_STREAM' },
    input: {
      source: 'RETELL.AI CORE',
      id: 'STREAM_882',
      title: 'ANÁLISIS EMOCIONAL',
      meta: 'Latencia: 50ms // Tono: Ansiedad detectada',
      content: `[TRANSCRIPCIÓN EN TIEMPO REAL]
Cliente: "Me gusta el proyecto, pero los pagos mensuales me quitan el sueño."
IA: Detectando objeción financiera. Sugiriendo: 'Plan de Escalonamiento'.`
    },
    council: {
      gemini: {
        title: "Cerrador de Voz",
        oportunidades: ["Usa el nombre del cliente para calmar la ansiedad.", "Propón el esquema de pagos crecientes."],
        estrategias: ["No reduzcas el precio, alarga el plazo del enganche.", "Enfócate en la seguridad del contrato."],
        metodologias: ["Marco: Seguridad Financiera.", "Técnica: La Escalera de Pagos."]
      },
      claude: {
        title: "Analista de Tono",
        oportunidades: ["Baja el tono de tu voz al responder.", "Haz una pausa de 2 segundos."],
        estrategias: ["Empatiza: 'Entiendo perfectamente, muchos empezaron así'."],
        metodologias: ["Marco: Empatía Estratégica.", "Técnica: El Espejo Emocional."]
      },
      gpt4: {
        title: "Cerrador Maestro",
        oportunidades: ["Finaliza con una pregunta de compromiso.", "Usa el silencio después de la propuesta."],
        estrategias: ["'¿Si resolvemos el flujo hoy, empezamos el trámite?'", "Cierre de doble opción de enganche."],
        metodologias: ["Marco: Decisión Inmediata.", "Técnica: El Cierre de Amarre."]
      }
    },
    output: {
      label: 'GUIÓN DYNAMICO RETELL',
      version: 'RETELL_PRO_v2',
      title: 'EL PLAN DE ESCALONAMIENTO',
      content: `"Javier, entiendo. ¿Qué te parece si movemos los pagos fuertes para el segundo año, cuando la plusvalía ya haya subido un 8%? Así, tú entras con un flujo muy cómodo hoy y el mismo proyecto se encarga de darte la confianza mañana. ¿Revisamos esa corrida?"`
    }
  },
  {
    id: 'airdna',
    label: 'AIRDNA // SMART_ROI',
    title: 'Inteligencia de Rentabilidad // Auditoría AirDNA',
    description: 'Análisis financiero avanzado mediante integración AirDNA. Visualiza la rentabilidad neta, plusvalía proyectada y ROI real para decisiones patrimoniales inteligentes.',
    metrics: { impact: '24.8%', label: 'ROI_NETO_PROYECTADO', status: 'Verificado', statusLabel: 'AIRDNA_INSIGHTS' },
    input: {
      source: 'AIRDNA CLOUD INTEGRATION',
      id: 'AIR_DATA_v7',
      title: 'MÉTRICAS DE ALTO IMPACTO',
      meta: 'Muestra: Mercado de Lujo // Plusvalía: 14% Anual',
      content: `[INTELIGENCIA FINANCIERA AIRDNA]
• ADR (Tarifa Diaria Promedio): $312 USD.
• Ocupación Estimada (Zonas Elite): 72% Anual.
• Plusvalía Proyectada (Histórico): $22,400 USD/año.
• ROI Neto (Renta + Plusvalía): 24.8%.

[MÉTODO DUKESYSTEM_SMART_ROI]
No vendemos metros cuadrados, vendemos velocidad de retorno. Los datos de AirDNA confirman que este activo supera cualquier inversión tradicional en la zona.`
    },
    council: {
      gemini: {
        title: "Analista de Capital",
        oportunidades: ["La plusvalía en este cuadrante es 3 veces superior al promedio.", "La escasez de oferta Prime garantiza rentas altas."],
        estrategias: ["Presentar el activo como un 'Safe Haven'.", "Usar la gráfica de retorno compuesto de 5 años."],
        metodologias: ["Marco: Inteligencia Patrimonial.", "Técnica: La Renta paga la Hipoteca."]
      },
      claude: {
        title: "Estratega Institucional",
        oportunidades: ["El inversor busca seguridad, muestra el historial real de AirDNA."],
        estrategias: ["'Esto es protección de capital con flujo de caja excedente'."],
        metodologias: ["Marco: Estabilidad de Activos.", "Técnica: La Auditoría de Datos."]
      },
      gpt4: {
        title: "Cerrador Financiero",
        oportunidades: ["Usa la corrida financiera para cerrar la lógica.", "Demuestra que el costo de esperar es perder plusvalía."],
        estrategias: ["'Los datos no mienten, ¿estás listo para este retorno?'", "Cierre basado en puntos de equilibrio rápidos."],
        metodologias: ["Marco: Inversión Racional.", "Técnica: La Prueba Social de ROI."]
      }
    },
    output: {
      label: 'INFORME DE RENTABILIDAD',
      version: 'MASTER_ROI_AIRDNA',
      title: 'SENTENCIA DE RENTABILIDAD',
      content: `DICTAMEN FINAL: OPORTUNIDAD ELITE.

DATOS AUDITADOS:
• Inversión: $180k USD.
• Renta Neta Estimada (Anual): $68,200 USD.
• Plusvalía Estimada (3 años): $72,000 USD.

TOTAL EARNINGS PROYECTADOS: $140k+ USD.
Recomendación: Adquisición Inmediata para asegurar ROI.`
    }
  }
];

// --- COMPONENTS ---

const Header = ({ live, setLive, workspace, setWorkspace }) => (
  <header className="h-24 flex items-center justify-between px-12 bg-[#010101]/90 backdrop-blur-3xl border-b border-white/5 z-50 fixed top-0 w-full shadow-2xl">
    <div className="flex items-center gap-16">
      <div className="flex flex-col group cursor-pointer">
        <h1 className="text-3xl font-black tracking-[-0.05em] text-white uppercase italic leading-none flex items-baseline gap-1 font-display" translate="no">
          DUKE<span className="text-emerald-500 not-italic font-medium tracking-normal text-xl opacity-90">SYSTEM</span>
        </h1>
        <div className="flex items-center gap-3 mt-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_#10b981]" />
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-600 font-mono italic">Nucleus v4.2 // Intelligence</span>
        </div>
      </div>

      <nav className="flex p-1.5 bg-white/[0.02] border border-white/5 rounded-2xl">
        <button
          onClick={() => setWorkspace('intelligence')}
          className={cn(
            "px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500",
            workspace === 'intelligence' ? "bg-emerald-500 text-black shadow-lg" : "text-slate-600 hover:text-slate-300"
          )}
        >
          PROTOCOLOS_MAESTROS
        </button>
        <button
          onClick={() => setWorkspace('crm')}
          className={cn(
            "px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ml-1",
            workspace === 'crm' ? "bg-blue-600 text-white shadow-lg" : "text-slate-600 hover:text-slate-300"
          )}
        >
          AUDITORÍA_PATRIMONIAL
        </button>
      </nav>
    </div>

    <div className="flex items-center gap-8">
      <div className="flex flex-col items-end mr-4">
        <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Global Status</span>
        <span className="text-[10px] font-black text-emerald-500 uppercase flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-emerald-500" /> SYNC_OPTIMIZED
        </span>
      </div>
      <button
        onClick={() => setLive(!live)}
        className={cn(
          "px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border transition-all duration-500",
          live ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]" : "bg-white/5 border-white/5 text-slate-700"
        )}
      >
        {live ? "OPERACIÓN_ACTIVA" : "EN_ESPERA"}
      </button>
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-white transition-all cursor-pointer">
        <Settings size={18} />
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

      {/* TOOLTIP HINT */}
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.4, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-emerald-500 uppercase tracking-[0.6em] whitespace-nowrap"
          >
            Hover para Expandir Dynamic Island
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const InputPane = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="rounded-[3rem] bg-[#050505] border border-white/5 flex flex-col h-full overflow-hidden hover:border-blue-500/20 transition-all group/pane shadow-[0_20px_80px_rgba(0,0,0,0.8)] relative">
      <div className="p-8 xl:p-12 border-b border-white/5 flex flex-col gap-8 bg-white/[0.01] relative z-10 transition-colors group-hover/pane:bg-blue-500/[0.02]">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2.5">
            <span className="text-[10px] font-black text-blue-500 tracking-[0.5em] uppercase font-mono flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              NODO DE PERCEPCIÓN COGNITIVA
            </span>
            <h3 className="text-2xl font-black text-white italic tracking-[-0.03em] uppercase font-display leading-none">CONTEXTO_ESTRATÉGICO</h3>
          </div>
          <div className="flex gap-6 opacity-40 group-hover/pane:opacity-100 transition-all duration-700">
            <MessageSquare size={18} className="text-blue-500 hover:scale-110 transition-transform cursor-pointer" />
            <Video size={18} className="text-emerald-500 hover:scale-110 transition-transform cursor-pointer" />
            <PhoneCall size={18} className="text-amber-500 hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </div>

        <div className="w-full p-6 rounded-2xl border border-dashed border-white/10 bg-white/[0.01] flex items-center justify-center gap-4 group/drop cursor-pointer hover:border-blue-500/30 hover:bg-blue-500/5 transition-all shadow-inner">
          <Command size={14} className="text-slate-600 group-hover/drop:text-blue-500 transition-colors" />
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] font-bold group-hover/drop:text-blue-400 transition-colors">
            ADJUNTAR_CARGA // INYECTAR_DATOS_CRUDOS
          </span>
        </div>
      </div>
      <div className="px-8 pt-4 pb-2 flex justify-between items-center">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/10 w-fit">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
          <span className="text-[9px] font-black text-blue-500/70 tracking-widest uppercase font-mono">FUENTE_VIVA: ACTIVA</span>
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all group/connect">
          <span className="text-[9px] font-black text-slate-500 group-hover/connect:text-white uppercase tracking-wider font-mono">+ CONECTAR FUENTE</span>
        </button>
      </div>
      <div className="p-8 xl:p-10 flex-1 flex flex-col relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className={cn(
          "flex-1 p-6 rounded-2xl bg-[#050505] border border-white/5 font-mono text-[13px] text-slate-300 leading-loose overflow-hidden transition-all duration-700 relative shadow-inner",
          expanded ? "max-h-[1200px]" : "max-h-[400px]"
        )}>
          {/* Terminal-like header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5 opacity-50">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-amber-500/50" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
            </div>
            <span className="text-[9px] font-mono ml-auto">ID_FLUJO: {data.id}</span>
          </div>

          {data.content.split('\n').map((line, i) => (
            <div key={i} className="mb-3 flex gap-4 group/line">
              <span className="text-slate-700 w-6 shrink-0 font-bold select-none text-right">{i + 1}</span>
              <span className={cn(
                "transition-colors duration-300 selection:bg-blue-500/30",
                line.includes('[') ? "text-blue-400 font-bold" : "group-hover/line:text-white"
              )}>
                {line}
                {i === data.content.split('\n').length - 1 && (
                  <span className="inline-block w-2 h-4 bg-blue-500 ml-1 animate-pulse align-middle" />
                )}
              </span>
            </div>
          ))}
          {!expanded && <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020202] via-[#020202]/90 to-transparent pointer-events-none" />}
        </div>
        <button onClick={() => setExpanded(!expanded)} className="mt-8 mx-auto flex items-center gap-3 px-8 py-3 rounded-full bg-blue-500/5 border border-blue-500/20 text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 hover:text-white hover:bg-blue-500 transition-all font-mono group/btn hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
          <Eye size={14} className={cn("transition-transform group-hover/btn:scale-110", expanded && "rotate-180")} /> {expanded ? "MINIMIZAR_CONSOLE" : "AUDITAR_STREAM_COMPLETO"}
        </button>
      </div>
    </div>
  );
};

const CouncilInsight = ({ modelKey, data, inputData, setFullScreen, setModel, onShowAllClients }) => {
  const m = MODELS[modelKey];
  const [activeClient, setActiveClient] = useState(CLIENTS[0]);

  // FALLBACK PROTECTOR
  if (!data) return (
    <div className="flex-1 flex items-center justify-center p-20 text-center">
      <div className="flex flex-col items-center gap-6">
        <Activity size={48} className="text-slate-800 animate-pulse" />
        <span className="text-slate-600 font-black uppercase tracking-[0.5em] text-[10px]">Iniciando Nodo AI...</span>
      </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col">
      {/* CLIENT IDENTITY CARD - NEW FEATURE */}
      <div className="mb-6 flex items-center justify-between p-2 pl-6 pr-2 bg-white/[0.03] border border-white/5 rounded-full">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border border-blue-500/30 overflow-hidden shadow-lg">
            <img src={activeClient.avatar} alt={activeClient.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-0.5">Cliente Activo</span>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-sm font-sans">{activeClient.name}</span>
              <span className="px-2 py-0.5 rounded text-[9px] bg-emerald-500/20 text-emerald-400 font-bold uppercase tracking-wider">{activeClient.status}</span>
            </div>
          </div>
        </div>
        <div className="flex bg-black/40 rounded-full p-1 border border-white/5 items-center">
          {CLIENTS.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveClient(c)}
              className={cn(
                "px-4 py-2 rounded-full text-[10px] font-bold transition-all uppercase tracking-wider",
                activeClient.id === c.id ? "bg-white/10 text-white shadow-inner" : "text-slate-500 hover:text-slate-300"
              )}
            >
              {c.name.split(' ')[0]}
            </button>
          ))}
          <div className="w-px h-4 bg-white/10 mx-1" />
          <button
            onClick={onShowAllClients}
            className="h-8 w-8 rounded-full flex items-center justify-center text-slate-600 hover:text-emerald-400 hover:bg-white/5 transition-all"
          >
            <Users size={14} />
          </button>
        </div>
      </div>

      <div className="flex p-1.5 bg-black border border-white/5 rounded-full mb-6 shadow-2xl ring-1 ring-white/5">
        {Object.entries(MODELS).map(([key, mod]) => (
          <button
            key={key}
            onClick={() => setModel(key)}
            className={cn(
              "flex-1 flex items-center justify-center gap-3 py-3 rounded-full text-[9px] font-black tracking-widest transition-all duration-700 relative overflow-hidden",
              modelKey === key ? "text-white" : "text-slate-600 hover:text-slate-400"
            )}
          >
            {modelKey === key && (
              <motion.div layoutId="active-model-bg" className={cn("absolute inset-0 opacity-20", mod.accent)} />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {mod.icon} {mod.name}
            </span>
          </button>
        ))}
      </div>
      <motion.div
        key={modelKey}
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
        className={cn("flex-1 p-10 xl:p-14 rounded-[3.5rem] border flex flex-col shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative overflow-hidden group/insight", m.bg, m.border)}
      >
        <button
          onClick={() => setFullScreen(modelKey)}
          className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:scale-110 transition-all z-20 backdrop-blur-md"
        >
          <Maximize2 size={18} />
        </button>

        <div className="relative z-10 flex-1 overflow-y-auto custom-scroll pr-4 pb-10">
          <div className="flex flex-col mb-16">
            <div className="flex flex-wrap items-center justify-between gap-y-6 mb-12">
              <div className="flex items-center gap-4">
                <span className={cn("px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.4em] border border-white/5 whitespace-nowrap", m.bg, m.color)}>NÚCLEO ULTRA-ESTRATÉGICO</span>
                <span className="text-[11px] font-mono text-slate-500 font-bold whitespace-nowrap tracking-widest bg-white/[0.03] px-3 py-2 rounded-xl">INTEGRIDAD_SINC::99.9%</span>
              </div>
              <button
                onClick={() => setWarRoom(true)}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all group/war shrink-0 ml-auto shadow-lg"
              >
                <Layers3 size={14} className="group-hover:rotate-12 transition-transform" /> PROTOCOLO_SINCRONÍA_V4
              </button>
            </div>

            <div className="space-y-6">
              <span className={cn("text-[12px] font-black uppercase tracking-[0.8em] block font-mono opacity-60 mb-2", m.color)}>
                {m.label} // RESPUESTA_COGNITIVA
              </span>
              <h3 className="text-2xl xl:text-3xl font-black text-white uppercase italic tracking-[-0.05em] leading-[1.1] font-display">
                {(data && data.title) || m.name}
              </h3>
              <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/10 to-transparent" />
              <p className="text-[11px] text-slate-500 font-mono uppercase tracking-[0.4em] italic">{m.provider} NODO QUANTUM ACTIVO</p>
            </div>
          </div>


          <div className="space-y-10">
            {/* CONTEXT INPUT AREA - REFINED FOR CLARITY */}
            <div className="p-6 xl:p-8 rounded-[2rem] bg-blue-500/[0.02] border border-blue-500/10 hover:border-blue-500/30 transition-all group/context relative overflow-hidden ring-1 ring-white/5">

              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2 font-sans">
                  <MessageCircle size={16} className="text-blue-400" />
                  Contexto de la Conversación
                </h3>
                <span className="text-[10px] font-medium text-slate-500 bg-white/5 px-3 py-1 rounded-lg">
                  ¿Qué dijo el cliente?
                </span>
              </div>

              {/* INPUT BOX SIMULATION */}
              <div className="w-full min-h-[120px] bg-[#050505] rounded-xl border border-white/10 p-5 mb-5 shadow-inner relative group/input">
                <div className="absolute top-4 left-4 text-slate-300 leading-relaxed font-sans text-sm pr-4 line-clamp-4 group-hover/input:line-clamp-none transition-all">
                  "{inputData?.content || "Escribe aquí lo que el cliente te envió o pega el texto..."}"
                </div>
                {/* Cursor simulation */}
                <div className="absolute bottom-4 left-4 w-1.5 h-4 bg-blue-500 animate-pulse" />
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex items-center justify-between gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:bg-white/10 hover:text-white transition-all text-xs font-bold uppercase tracking-wider group/btn">
                  <ArrowUpRight size={14} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  Subir Evidencia
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition-all text-xs font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98]">
                  <Cpu size={14} fill="white" />
                  Analizar Estratégicamente
                </button>
              </div>

              {/* AI STATUS */}
              <div className="mt-6 flex items-center justify-center gap-2 opacity-60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                  STREAM DE ANÁLISIS: ACTIVO
                </span>
              </div>
            </div>

            <section>
              <div className="flex items-center gap-5 mb-8">
                <div className={cn("w-1.5 h-8 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]", m.accent)} />
                <h4 className="text-[14px] font-black text-white uppercase tracking-[0.4em] italic font-display">Brechas Estratégicas</h4>
              </div>
              <div className="grid grid-cols-1 gap-5">
                {data.oportunidades.map((item, i) => (
                  <div key={i} className="flex gap-6 p-7 rounded-[2rem] bg-[#050505] border border-white/5 hover:border-white/20 hover:bg-[#070707] transition-all group/card shadow-inner">
                    <LightbulbIcon size={20} className={cn("shrink-0 transition-transform group-hover/card:scale-110", m.color)} />
                    <p className="text-[16px] text-slate-300 font-normal leading-relaxed tracking-tight">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-5 mb-8">
                <div className={cn("w-1.5 h-8 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]", m.accent)} />
                <h4 className="text-[14px] font-black text-white uppercase tracking-[0.4em] italic font-display">Planos Operativos</h4>
              </div>
              <div className="grid grid-cols-1 gap-5">
                {data.estrategias.map((item, i) => (
                  <div key={i} className="flex gap-6 p-7 rounded-[2rem] bg-[#050505] border border-white/5 hover:border-white/20 hover:bg-[#070707] transition-all group/card shadow-inner">
                    <Workflow size={20} className={cn("shrink-0 transition-transform group-hover/card:rotate-90", m.color)} />
                    <p className="text-[16px] text-slate-300 font-normal leading-relaxed tracking-tight">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-5 mb-8">
                <div className={cn("w-1.5 h-8 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]", m.accent)} />
                <h4 className="text-[14px] font-black text-white uppercase tracking-[0.4em] italic font-display">Metodologías de Protocolo</h4>
              </div>
              <div className="grid grid-cols-1 gap-5">
                {data.metodologias.map((item, i) => (
                  <div key={i} className="flex gap-6 p-7 rounded-[2rem] bg-[#050505] border border-white/5 hover:border-white/20 hover:bg-[#070707] transition-all group/card shadow-inner">
                    <ClipboardList size={20} className={cn("shrink-0 transition-transform group-hover/card:scale-110", m.color)} />
                    <p className="text-[15px] text-slate-400 font-mono uppercase tracking-widest">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex items-center justify-between relative z-10 shrink-0 mt-auto">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-600 font-mono mb-2 italic">Fuente de Cómputo Quantum</span>
            <span className="text-[14px] font-black text-slate-400 tracking-widest uppercase font-display italic">{m.provider}</span>
          </div>
          <div className={cn("px-8 py-3 rounded-2xl bg-black border border-white/10 text-[11px] font-black uppercase tracking-[0.3em] shadow-xl", m.color)}>
            ALINEACIÓN_COGNITIVA: 100%
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const FullScreenModal = ({ modelKey, data, onClose }) => {
  const m = MODELS[modelKey];
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    { role: 'system', content: data.oportunidades[0] }, // Initial context
    { role: 'system', content: `Estrategia Principal: ${data.estrategias[0]}` }
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

    // Simulate AI Response based on Real Estate context
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        role: 'system',
        content: `Recibido. Ajustando vector táctico para "${newMsg.content}". Desplegando contra-argumento de alta conversión basado en el perfil psicográfico del cliente.`
      }]);
    }, 1500);
  };

  const quickActions = [
    "Ajustar tono a: EMPÁTICO",
    "Ajustar tono a: AGRESIVO",
    "Resumir para WhatsApp (Corto)",
    "Expandir manejo de objeción"
  ];

  if (!modelKey) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12 bg-black/90 backdrop-blur-3xl"
    >
      <motion.div
        initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }}
        className={cn("w-full max-w-[1800px] h-[90vh] rounded-[3rem] border flex overflow-hidden shadow-[0_0_150px_rgba(0,0,0,1)] bg-[#020202]", m.border)}
      >
        {/* LEFT COLUMN: STATIC CONTEXT (The Dossier) */}
        <div className="w-1/3 border-r border-white/5 bg-white/[0.01] flex flex-col hidden xl:flex">
          <div className="p-10 border-b border-white/5">
            <span className={cn("text-[10px] font-black uppercase tracking-[0.5em] mb-4 block font-mono", m.color)}>DOSSIER TÁCTICO // {modelKey.toUpperCase()}</span>
            <h3 className="text-4xl font-black text-white tracking-tight uppercase italic leading-none">{data.title}</h3>
          </div>

          <div className="flex-1 overflow-y-auto custom-scroll p-10 space-y-10">
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className={cn("w-1 h-6 rounded-full", m.accent)} />
                <h4 className="text-sm font-black text-white uppercase tracking-[0.2em] italic">Análisis de Brechas</h4>
              </div>
              <div className="space-y-4">
                {data.oportunidades.map((item, i) => (
                  <p key={i} className="text-sm text-slate-400 font-light leading-relaxed border-l-2 border-white/5 pl-4">{item}</p>
                ))}
              </div>
            </section>
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className={cn("w-1 h-6 rounded-full", m.accent)} />
                <h4 className="text-sm font-black text-white uppercase tracking-[0.2em] italic">Protocolos Activos</h4>
              </div>
              <div className="space-y-4">
                {data.estrategias.map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE COMMAND (The Chat) */}
        <div className="flex-1 flex flex-col relative bg-[#050505]">
          {/* Header */}
          <div className="h-20 border-b border-white/5 flex items-center justify-between px-10 bg-white/[0.01]">
            <div className="flex items-center gap-4">
              <div className={cn("w-10 h-10 rounded-full flex items-center justify-center border border-white/10", m.bg)}>
                {m.icon}
              </div>
              <div>
                <span className={cn("text-[9px] font-black uppercase tracking-widest block", m.color)}>ENLACE DIRECTO</span>
                <span className="text-sm font-bold text-white uppercase tracking-widest">{m.name} // MODO_INTERACTIVO</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Feed */}
          <div className="flex-1 overflow-y-auto p-10 space-y-8" ref={scrollRef}>
            <div className="flex justify-center mb-8">
              <span className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.3em] bg-white/5 px-4 py-1 rounded-full">Sesión Encriptada Iniciada {new Date().toLocaleTimeString()}</span>
            </div>

            {/* Initial System Message (The Full Analysis) */}
            <div className="flex gap-6 max-w-4xl">
              <div className={cn("w-8 h-8 rounded-full shrink-0 flex items-center justify-center mt-1", m.bg, m.color)}>
                <Terminal size={14} />
              </div>
              <div className="flex flex-col gap-2">
                <span className={cn("text-[10px] font-black uppercase tracking-widest", m.color)}>SISTEMA // REPORTE INICIAL</span>
                <div className="p-6 rounded-r-3xl rounded-bl-3xl bg-[#111] border border-white/5 text-slate-300 leading-relaxed text-sm shadow-xl">
                  <p className="mb-4 font-bold text-white uppercase tracking-wide">Análisis completado.</p>
                  <p className="mb-4">He detectado {data.oportunidades.length} puntos críticos en la interacción. La estrategia óptima es "{data.metodologias[0]}".</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {data.estrategias.map((s, i) => (
                      <div key={i} className="bg-black/40 p-3 rounded-lg border border-white/5 text-xs font-mono text-slate-400 border-l-2 border-l-emerald-500/50">
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Messages */}
            {messages.map((msg, idx) => (
              <div key={idx} className={cn("flex gap-6 max-w-4xl", msg.role === 'user' ? "ml-auto flex-row-reverse" : "")}>
                <div className={cn(
                  "w-8 h-8 rounded-full shrink-0 flex items-center justify-center mt-1",
                  msg.role === 'user' ? "bg-slate-700 text-white" : cn(m.bg, m.color)
                )}>
                  {msg.role === 'user' ? <UserCheck size={14} /> : <Terminal size={14} />}
                </div>
                <div className="flex flex-col gap-2">
                  <span className={cn(
                    "text-[10px] font-black uppercase tracking-widest",
                    msg.role === 'user' ? "text-slate-500 text-right" : m.color
                  )}>
                    {msg.role === 'user' ? "OPERADOR (TÚ)" : "SISTEMA // RESPUESTA"}
                  </span>
                  <div className={cn(
                    "p-5 text-sm shadow-xl leading-relaxed",
                    msg.role === 'user'
                      ? "rounded-l-3xl rounded-br-3xl bg-slate-800 text-white border border-slate-700"
                      : "rounded-r-3xl rounded-bl-3xl bg-[#111] border border-white/5 text-slate-300"
                  )}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-6 max-w-4xl">
                <div className={cn("w-8 h-8 rounded-full shrink-0 flex items-center justify-center mt-1", m.bg, m.color)}>
                  <Terminal size={14} />
                </div>
                <div className="flex items-center gap-1 p-4 rounded-r-3xl rounded-bl-3xl bg-[#111] border border-white/5 h-12 w-24">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce delay-75" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce delay-150" />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-8 border-t border-white/5 bg-black/40 backdrop-blur-md relative z-20">
            {/* Quick Actions */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
              {quickActions.map((action, i) => (
                <button
                  key={i}
                  onClick={() => setQuery(action)}
                  className="whitespace-nowrap px-4 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/10 text-[10px] font-black uppercase tracking-wider text-slate-400 hover:text-blue-400 transition-all"
                >
                  {action}
                </button>
              ))}
            </div>

            <div className="relative group/input">
              <div className={cn("absolute inset-0 rounded-2xl opacity-20 blur-lg transition-all duration-500 group-focus-within/input:opacity-50", m.bg)} />
              <div className="relative flex items-center gap-4 bg-[#0a0a0a] border border-white/10 rounded-2xl p-2 pl-6 shadow-2xl focus-within:border-white/20 transition-all">
                <ChevronRight size={18} className={cn("animate-pulse", m.color)} />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="INTRODUCIR COMANDO TÁCTICO..."
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono text-sm placeholder:text-slate-700 h-10"
                />
                <button
                  onClick={handleSend}
                  className={cn("w-12 h-12 rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95", m.accent)}
                >
                  <ArrowUpRight size={20} className="text-black" />
                </button>
              </div>
            </div>
            <div className="mt-3 text-center">
              <span className="text-[9px] text-slate-600 font-mono uppercase tracking-[0.3em]">Conexión Segura // DUKESYSTEM_L4_ENCRYPTED</span>
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
          <span className="text-sm font-black text-emerald-500 uppercase tracking-[1em] mb-4 block font-mono">CONSEJO_VIRTUAL // SINCRONÍA_ESTRATÉGICA</span>
          <h3 className="text-5xl md:text-7xl font-black text-white tracking-widest uppercase italic leading-none">{scenario.label} // MESA_DE_CONTROL</h3>
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

  const handleCopy = () => {
    navigator.clipboard.writeText(data.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`*${data.title}*\n\n${data.content}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="rounded-[4rem] bg-emerald-500/[0.04] border border-emerald-500/10 p-14 flex flex-col h-full hover:border-emerald-500/30 transition-all shadow-[0_30px_100px_rgba(0,0,0,0.6)] relative overflow-hidden group/deliverable">
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none group-hover/deliverable:scale-150 transition-transform duration-1000" />

      <div className="flex justify-between items-center mb-16 relative z-10 border-b border-white/10 pb-10">
        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-black text-slate-600 uppercase tracking-[0.6em] font-mono italic opacity-60">{data.version}</span>
          <h3 className="text-emerald-500 font-black text-2xl uppercase tracking-[0.1em] italic font-display leading-none">
            ULTRA-HIGH VALUE ASSET
          </h3>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleCopy}
            className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all hover:bg-white/10"
            title="Copiar al Portapapeles"
          >
            {copied ? <CheckCircle2 size={24} className="text-emerald-500" /> : <ClipboardList size={24} />}
          </button>
          <button
            onClick={handleWhatsApp}
            className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-black transition-all"
            title="Enviar por WhatsApp"
          >
            <MessageCircle size={24} />
          </button>
        </div>
      </div>

      <div className="mb-16 relative z-10 flex-1">
        <div className="flex items-center gap-5 mb-10">
          <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 shadow-inner">
            <Zap size={22} className="text-emerald-500 fill-emerald-500 shadow-lg animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] block mb-1.5 font-mono italic">NODO_RESOLUCIÓN_SINÉRGICA</span>
            <h4 className="text-[16px] font-black text-white uppercase tracking-[0.2em] italic block font-display">{data.title}</h4>
          </div>
        </div>
        <div className="p-12 rounded-[3.5rem] bg-[#020202] border border-white/5 font-display text-[18px] text-white/90 leading-loose italic shadow-[inset_0_2px_40px_rgba(0,0,0,0.8)] relative overflow-hidden group/text min-h-[350px] flex items-center ring-1 ring-white/5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-emerald-500/0 opacity-50" />
          <div className="absolute top-8 right-10 opacity-10 group-hover/text:opacity-30 transition-opacity duration-700">
            <Cpu size={50} className="text-emerald-500" />
          </div>
          <span className="absolute top-8 left-10 text-emerald-500/30 text-[10px] block uppercase tracking-[0.5em] font-black select-none font-mono tracking-tighter">// COMANDO_EJECUCIÓN_ACTIVO</span>
          <div className="relative z-10 pl-8 border-l-4 border-emerald-500/20 bg-emerald-500/[0.01] py-4 rounded-r-3xl whitespace-pre-wrap">
            {data.content}
          </div>
        </div>
      </div>

      <button
        onClick={handleWhatsApp}
        className="h-28 w-full bg-emerald-500 text-black rounded-[3rem] font-black text-[18px] uppercase tracking-[0.8em] shadow-[0_40px_100px_rgba(16,185,129,0.5)] hover:bg-emerald-400 hover:scale-[1.02] hover:-translate-y-1.5 transition-all duration-500 active:scale-[0.98] flex items-center justify-center gap-8 relative z-10 group/btn overflow-hidden font-display"
      >
        <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 animate-pulse" />
        <MessageSquare size={28} className="group-hover/btn:scale-125 transition-transform duration-700" />
        DESPLEGAR ACTIVO POR WHATSAPP
      </button>
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
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed inset-y-0 right-0 w-[450px] bg-[#020202]/95 backdrop-blur-3xl z-[300] border-l border-white/5 p-12 shadow-[-40px_0_100px_rgba(0,0,0,0.5)] flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1 italic">Expedientes de Red</span>
                  <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">CLIENTES_ELITE</h3>
                </div>
                <button onClick={() => setShowAllClients(false)} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all">
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-6 overflow-y-auto custom-scroll pr-4">
                {CLIENTS.map((c) => (
                  <div key={c.id} className="p-6 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-emerald-500/20 transition-all group/cli">
                    <div className="flex items-center gap-5 mb-4">
                      <img src={c.avatar} alt="" className="w-12 h-12 rounded-2xl object-cover border border-white/10" />
                      <div className="flex flex-col">
                        <span className="text-white font-bold text-lg">{c.name}</span>
                        <span className="text-[11px] text-slate-500 font-mono tracking-wider">{c.email}</span>
                      </div>
                      <div className="ml-auto w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/50 p-3 rounded-xl border border-white/5">
                        <span className="text-[9px] text-slate-600 uppercase font-black block">Patrimonio Global</span>
                        <span className="text-white font-black text-sm">{c.value}</span>
                      </div>
                      <div className="bg-black/50 p-3 rounded-xl border border-white/5">
                        <span className="text-[9px] text-slate-600 uppercase font-black block">Status Operativo</span>
                        <span className="text-emerald-500 font-black text-xs uppercase">{c.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-auto h-16 w-full rounded-2xl bg-white/5 border border-white/10 text-slate-400 font-black text-[11px] uppercase tracking-[0.4em] hover:bg-white/10 hover:text-white transition-all">
                + REGISTRAR NUEVO ACTIVO
              </button>
            </motion.div>
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
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] font-mono">PROTOCOL_GS_v1.0</span>
                    <div className="h-px w-8 bg-blue-500/30" />
                    <span className="text-[9px] font-medium text-slate-600 uppercase tracking-widest font-mono">ESTADO: EN_OPERACIÓN_MAESTRA</span>
                  </div>
                  <h2 className="text-3xl xl:text-4xl font-black text-white tracking-widest uppercase italic leading-none flex items-baseline gap-4">
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
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2 block font-sans group-hover:text-blue-500 transition-colors whitespace-nowrap">{scenario.metrics.label}</span>
                    <span className="text-3xl font-black text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">{scenario.metrics.impact}</span>
                  </div>
                  <div className="px-8 py-5 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col items-center shadow-xl backdrop-blur-md hover:border-emerald-500/20 transition-all group">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2 block font-sans group-hover:text-emerald-500 transition-colors whitespace-nowrap">{scenario.metrics.statusLabel}</span>
                    <span className="text-3xl font-black text-emerald-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">{scenario.metrics.status}</span>
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
              <div className="mb-20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.5em] font-mono">NEXUS_ALPHA_v4.2</span>
                  <div className="h-px w-8 bg-amber-500/30" />
                  <span className="text-[9px] font-medium text-slate-600 uppercase tracking-widest font-mono">AUDITORÍA_DE_RED_GLOBAL</span>
                </div>
                <h2 className="text-3xl xl:text-4xl font-black text-white tracking-widest uppercase italic leading-none flex items-baseline gap-4">
                  MONITOREO <span className="text-amber-500/40 font-light text-2xl tracking-tighter italic">// ESTRATÉGICO</span>
                </h2>
                <div className="mt-3 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/40" />
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em] font-mono">
                    // Visualización en tiempo real de activos y rendimiento de agentes del CRM.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-8 mb-16">
                {['Pipeline Total', 'Conversión Promedio', 'Salud de Leads', 'Proyección Cierre'].map((label, i) => (
                  <div key={i} className="p-10 rounded-3xl bg-white/[0.01] border border-white/5 shadow-3xl hover:border-amber-500/20 transition-all group transition-all">
                    <span className="text-[10px] font-black text-slate-700 uppercase tracking-[0.4em] mb-4 block font-mono group-hover:text-amber-500 transition-colors">{label}</span>
                    <div className="text-4xl font-black text-amber-500 italic">$42.8M</div>
                  </div>
                ))}
              </div>

              {/* CRM INTEGRATION MODULES */}
              <div className="grid grid-cols-3 gap-8 mb-16">
                {['Salesforce', 'HubSpot', 'Pipedrive'].map((crm) => (
                  <div key={crm} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-between group hover:border-amber-500/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                        <Layers size={18} />
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block font-mono">INTEGRACIÓN_ACTIVA</span>
                        <span className="text-sm font-bold text-white uppercase tracking-wider">{crm} CLOUD</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-emerald-500/70 font-mono">SINCRONIZADO</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-12">
                <div className="p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 h-[650px] flex flex-col shadow-2xl relative overflow-hidden group/chart">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />
                  <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-12 flex items-center gap-6">
                    <PieChart size={32} className="text-amber-500" /> Inteligencia de Pipeline
                  </h3>
                  <div className="flex-1 flex items-end gap-10 px-6 mb-8">
                    {[40, 75, 55, 90, 65, 85, 45].map((h, i) => (
                      <div key={i} className="flex-1 bg-amber-500/5 border border-white/5 rounded-t-3xl relative overflow-hidden group/bar">
                        <motion.div initial={{ height: 0 }} animate={{ height: `${h}%` }} className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-amber-600 to-amber-400 group-hover/bar:brightness-125 transition-all" />
                      </div>
                    ))}
                  </div>
                  <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Cpu size={16} className="text-amber-500" />
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] font-mono">Predicción de Cierre via Stratos AI::88% Precisión</span>
                    </div>
                  </div>
                </div>

                <div className="p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 h-[650px] flex flex-col shadow-2xl overflow-y-auto custom-scroll relative">
                  <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-12 flex items-center gap-6">
                    <Users size={32} className="text-blue-500" /> Monitoreo de Talento
                  </h3>
                  <div className="space-y-6">
                    {CLIENTS.map((client, i) => (
                      <div key={i} className="flex items-center justify-between p-8 rounded-[2.5rem] bg-black border border-white/5 hover:border-blue-500/30 transition-all group/item">
                        <div className="flex items-center gap-5">
                          <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/10 group-hover/item:border-blue-500/30 transition-all">
                            <img src={client.avatar} alt="" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xl font-black text-white italic uppercase tracking-tight">{client.name}</span>
                            <span className="text-[10px] text-slate-500 font-mono tracking-widest">{client.email}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-emerald-500 font-mono text-[14px] font-black">+18% ROI</span>
                          <span className="text-[9px] text-blue-500/50 uppercase font-black tracking-widest mt-1">Nivel: {client.tag}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* COUNCIL OVERVIEW IN CRM */}
              <div className="mt-16 grid grid-cols-3 gap-8">
                {Object.entries(MODELS).map(([key, m]) => (
                  <div key={key} className={cn("p-8 rounded-[2rem] border bg-white/[0.02] flex flex-col gap-4 transition-all hover:scale-[1.02]", m.border)}>
                    <div className="flex items-center gap-3">
                      <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", m.bg)}>
                        {m.icon}
                      </div>
                      <span className={cn("text-[10px] font-black uppercase tracking-[0.2em]", m.color)}>{m.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-medium leading-relaxed">Analizando patrones de cierre en tiempo real para optimizar el {m.label.toLowerCase()} de la red.</p>
                    <div className="h-px bg-white/5 w-full mt-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-slate-600 uppercase font-bold tracking-tighter font-mono">STATUS: OPTIMIZADO</span>
                      <span className={cn("text-[11px] font-black", m.color)}>99.9%</span>
                    </div>
                  </div>
                ))}
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
        <span className="text-[8px] font-black text-slate-700 uppercase tracking-[0.5em] font-mono opacity-40">NÚCLEO_DUKESYSTEM_v4.2.0</span>
      </footer>
    </div>
  );
}
