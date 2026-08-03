export const serviceGroups = [
  {
    title: "Diagnoză și verificări",
    description:
      "Identificăm rapid problemele sistemului electric și verificăm funcționarea componentelor esențiale.",
    icon: "Gauge",
    items: [
      "Diagnoză electrică",
      "Verificare baterie și sistem de încărcare",
      "Identificarea defecțiunilor electrice",
    ],
  },
  {
    title: "Reparații electrice auto",
    description: "Remediem o gamă variată de defecțiuni ale instalației electrice.",
    icon: "Wrench",
    items: [
      "Reparație cablaj auto",
      "Reparație cablaj remorcă și montaj priză remorcă",
      "Reparații electromotoare",
      "Reparații ștergătoare",
      "Reparații închidere centralizată",
      "Reparații geamuri electrice",
      "Reparații oglinzi electrice",
      "Reparații ventilatoare încălzire/răcire",
      "Reparații termocuple",
      "Reparații cabluri de încărcare pentru mașini electrice (Type 2)",
    ],
  },
  {
    title: "Montaj accesorii",
    description: "Instalăm accesorii auto cu atenție la detalii și integrare profesională.",
    icon: "Navigation",
    items: [
      "Navigații",
      "Camere pentru marșarier",
      "Senzori de parcare",
      "Proiectoare și LED Bar",
      "Troliu",
      "Lumini ambientale",
      "Încărcătoare wireless",
      "AUX și Bluetooth pentru casetofoane",
    ],
  },
  {
    title: "Sisteme audio și iluminare",
    description: "Îmbunătățim confortul și experiența la volan.",
    icon: "Speaker",
    items: [
      "Montaj subwoofere",
      "Montaj amplificatoare audio",
      "Înlocuire și montaj becuri",
      "Reparații și montaj LED-uri pentru faruri și stopuri",
      "Reparații lumini de bord",
    ],
  },
] as const;

export const onSiteService = {
  title: "Deplasare la fața locului",
  description:
    "Pentru anumite intervenții, oferim deplasare la locația clientului, astfel încât să economisești timp și să beneficiezi de asistență rapidă atunci când ai nevoie.",
  icon: "Truck",
} as const;
