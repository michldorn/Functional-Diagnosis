// Gesamte Datenstruktur mit allen Blöcken und Unterpunkten
const data = {
  ort: {
    Bewegungsapparat: {
      "Schultergelenk und obere Extremität": {
        Schultergelenk: [
          "Rotatorenmanschette",
          "Supraspinatus",
          "Infraspinatus",
          "Subscapularis",
          "Teres minor",
          "Bizepssehne",
          "Glenohumeralgelenk",
          "Labrum glenoidale",
          "Akromioklavikulargelenk",
          "Sternoklavikulargelenk",
        ],
        Oberarm: [
          "M. biceps brachii",
          "M. triceps brachii",
          "M. brachialis",
          "M. deltoideus",
          "Humerus",
          "Brachialarterie",
          "N. musculocutaneus",
          "N. radialis",
          "Bizepssehne",
          "M. coracobrachialis",
        ],
        Ellenbogen: [
          "Gelenkknorpel",
          "Ulnar- und Radialgelenk",
          "M. brachioradialis",
          "Bänder des Ellenbogengelenks",
          "Gelenkkapsel",
          "M. anconeus",
          "Ulna",
          "Radius",
          "N. ulnaris",
          "M. pronator teres",
        ],
        Unterarm: [
          "M. flexor carpi radialis",
          "M. flexor carpi ulnaris",
          "M. extensor carpi radialis",
          "M. extensor carpi ulnaris",
          "M. pronator quadratus",
          "Radius",
          "Ulna",
          "Handgelenk",
          "M. supinator",
          "N. medianus",
        ],
        Handgelenk: [
          "Karpalgelenk",
          "Handwurzelknochen",
          "M. flexor pollicis longus",
          "M. extensor pollicis longus",
          "M. opponens pollicis",
          "Gelenksflüssigkeit",
          "M. abductor pollicis longus",
          "M. extensor digitorum",
          "M. flexor digitorum",
          "M. opponens pollicis",
        ],
        Hand: [
          "Daumen",
          "Zeigefinger",
          "Mittelfinger",
          "Ringfinger",
          "Kleiner Finger",
          "Sehnen der Fingerbeuger",
          "Sehnen der Fingerstrecker",
          "M. opponens pollicis",
          "M. abductor pollicis",
          "Nerven der Hand",
        ],
        Finger: [
          "Phalangen",
          "Fingerbeugemuskeln",
          "Fingerstreckmuskeln",
          "Sehnen des Daumens",
          "N. medianus",
          "N. ulnaris",
          "M. flexor digitorum",
          "N. radialis",
          "M. extensor pollicis",
          "Fingergrundgelenk",
        ],
      },
      "Becken und untere Extremität": {
        Hüfte: [
          "Hüftgelenk",
          "M. gluteus maximus",
          "M. quadratus femoris",
          "M. iliopsoas",
          "M. adductor longus",
          "M. adductor magnus",
          "M. rectus femoris",
          "M. sartorius",
          "Beckenmuskulatur",
          "Hüftbeuger",
        ],
        Oberschenkel: [
          "M. quadriceps femoris",
          "M. biceps femoris",
          "M. semitendinosus",
          "M. semimembranosus",
          "M. sartorius",
          "Oberschenkelarterie",
          "Femur",
          "Kniesehne",
          "Oberschenkelknochen",
          "Oberschenkelmuskulatur",
        ],
        Knie: [
          "Kniegelenk",
          "Patella",
          "M. quadriceps femoris",
          "M. hamstrings",
          "Bänder des Kniegelenks",
          "Kreuzbänder",
          "Patellarsehne",
          "Kniescheibe",
          "Oberschenkelmuskulatur",
          "Kniegelenkspass",
        ],
        Unterschenkel: [
          "Tibia",
          "Fibula",
          "M. gastrocnemius",
          "M. soleus",
          "M. tibialis anterior",
          "M. tibialis posterior",
          "Unterschenkelsehnen",
          "Unterschenkelnerven",
          "Unterschenkelarterien",
          "Unterschenkelfraktur",
        ],
        Sprunggelenk: [
          "Sprunggelenk (Oberes Sprunggelenk)",
          "Malleolus",
          "Fersenbein",
          "M. peroneus longus",
          "M. peroneus brevis",
          "Achillessehne",
          "Längsgewölbe des Fußes",
          "Knöchel",
          "Sprunggelenkspass",
          "Gelenkkapsel",
        ],
        Fuß: [
          "Fersenbein",
          "Fußwurzelknochen",
          "Mittelfußknochen",
          "Zehen",
          "Plantarfaszie",
          "Fußmuskulatur",
          "M. tibialis anterior",
          "M. extensor digitorum longus",
          "Fußgelenk",
          "Fußarterien",
        ],
        Zehen: [
          "Großzehe",
          "Zehenbeuger",
          "Zehenstrecker",
          "Zehenmuskeln",
          "Hallux valgus",
          "Nagelmatrix",
          "Zehenfraktur",
          "Sehnen der Zehen",
          "Zehenknochen",
          "Plantarfaszie",
        ],
      },
    },
    "Kardio-respiratorisches System": {
      Herz: [
        "Herzmuskel",
        "Herzklappen",
        "Herzkranzgefäße",
        "Reizleitungssystem des Herzens",
        "Sinusknoten",
        "AV-Knoten",
        "Herzwand",
        "Perikard",
        "Herzmuskelfasern",
        "Koronargefäße",
      ],
      Lunge: [
        "Lungengewebe",
        "Atemwege",
        "Bronchien",
        "Alveolen",
        "Zwerchfell",
        "Rippen",
        "Lungenflügel",
        "Lungenarterien",
        "Bronchialmuskulatur",
        "Trachea",
      ],
    },
    Nervensystem: {
      "Zentrales Nervensystem": [
        "Gehirn",
        "Rückenmark",
        "Hirnnerven",
        "Graue Substanz",
        "Weiße Substanz",
        "Nervenzellen",
        "Synapsen",
        "Rückenmarksnerven",
        "Zerebellum",
        "Großhirn",
      ],
      "Peripheres Nervensystem": [
        "Nervenbahnen",
        "Ganglien",
        "Spinalnerven",
        "Hirnnerven",
        "N. radialis",
        "N. ulnaris",
        "N. medianus",
        "N. tibialis",
        "N. sciaticus",
        "Nervus femoralis",
      ],
      "Vegetatives Nervensystem": [
        "Sympathisches Nervensystem",
        "Parasympathisches Nervensystem",
        "Nervus vagus",
        "Sympathische Ganglien",
        "Autonome Nerven",
        "Hypothalamus",
        "Hypophyse",
        "Autonome Reflexe",
        "Neurotransmitter",
        "Adrenalin",
      ],
    },
    "Haut und Weichteile": {
      Haut: [
        "Epidermis",
        "Dermis",
        "Subkutis",
        "Haarfollikel",
        "Schweißdrüsen",
        "Talgdrüsen",
        "Melanozyten",
        "Nerven der Haut",
        "Kapillaren",
        "Hautrezeptoren",
      ],
    },
    "Blut- und Lymphsystem": {
      Blutgefäße: [
        "Arterien",
        "Venen",
        "Kapillaren",
        "Aorta",
        "Lungenarterie",
        "V. cava",
        "V. jugularis",
        "V. femoralis",
        "V. brachialis",
        "V. radialis",
      ],
      Lymphgefäße: [
        "Lymphknoten",
        "Lymphgefäße",
        "Lymphatisches Gewebe",
        "Lymphe",
        "Thymus",
        "Milz",
        "Lymphozyten",
        "Lymphtransport",
        "Lymphäquivalente",
      ],
    },
    "Endokrines System": {
      Schilddrüse: [
        "Schilddrüsengewebe",
        "Schilddrüsenhormone",
        "Schilddrüsenkapsel",
        "Schilddrüsenarterie",
        "Schilddrüsenvenen",
        "Schilddrüsenlappen",
        "Parathyroiddrüsen",
        "TSH-Rezeptoren",
        "Follikelzellen",
        "C-Zellen",
      ],
      Nebennieren: [
        "Nebennierenrinde",
        "Nebennierenmark",
        "Cortisol",
        "Adrenalin",
        "Noradrenalin",
        "Aldosteron",
        "Nebennierenarterien",
        "Nebennierenvenen",
        "Nebennierenhormone",
        "Medulla",
      ],
    },
  },
  art: {
    "Physiologische Funktionen des Körpers": {
      "Herz-Kreislauf-Funktionen": [
        "Herzschlag",
        "Blutdruckregulation",
        "Durchblutungsfunktionen",
        "Herzzeitvolumen",
        "Koronare Zirkulation",
        "Pulsfrequenz",
        "Schlagvolumen",
        "Gefäßtonus",
        "Kreislaufregulation",
        "Sauerstofftransport",
      ],
      Atmungsfunktionen: [
        "Atemfrequenz",
        "Atemzugvolumen",
        "Lungenventilation",
        "Sauerstoffaufnahme",
        "Kohlendioxidabgabe",
        "Atemrhythmus",
        "Gasaustausch",
        "Lungenkapazität",
        "Atemeffizienz",
        "Atemmuster",
      ],
      Verdauungsfunktionen: [
        "Magenfunktionen",
        "Dünndarmfunktionen",
        "Dickdarmfunktionen",
        "Verdauungsenzyme",
        "Leberfunktionen",
        "Gallenproduktion",
        "Nahrungsresorption",
        "Nahrungsdurchgang",
        "Peristaltik",
        "Blähungen",
      ],
      Ausscheidungsfunktionen: [
        "Blasenfunktion",
        "Urinproduktion",
        "Urinabgabe",
        "Stuhlabgabe",
        "Darmfunktion",
        "Nierenfunktion",
        "Wasserhaushalt",
        "Elektrolythaushalt",
        "Salzhaushalt",
        "Blasenentleerung",
      ],
      Thermoregulation: [
        "Körpertemperaturregulation",
        "Wärmeproduktion",
        "Schweißproduktion",
        "Wärmeverlust",
        "Kälteempfindlichkeit",
        "Wärmeempfindlichkeit",
        "Kälteresistenz",
        "Hitzetoleranz",
        "Thermogenese",
        "Zentrale Temperaturwahrnehmung",
      ],
      "Hormonelle Funktionen": [
        "Insulinproduktion",
        "Schilddrüsenhormone",
        "Cortisolproduktion",
        "Wachstumshormone",
        "Adrenalinproduktion",
        "Testosteronproduktion",
        "Östrogenproduktion",
        "Progesteronproduktion",
        "Blutzuckerregulation",
        "Endokrine Steuerung",
      ],
    },
    "Funktionen des Nervensystems": {
      "Zentrales Nervensystem": [
        "Gehirnaktivität",
        "Kognitive Funktionen",
        "Gedächtnisfunktionen",
        "Aufmerksamkeit",
        "Wahrnehmung",
        "Entscheidungsfindung",
        "Sprachverständnis",
        "Sprachproduktion",
        "Problemlösungsfähigkeiten",
        "Problemerkennung",
      ],
      "Peripheres Nervensystem": [
        "Nervenimpulsweiterleitung",
        "Sensorische Funktionen",
        "Motorische Funktionen",
        "Neuromuskuläre Funktionen",
        "Reflexantworten",
        "Sensomotorische Integration",
        "Schmerzempfindung",
        "Koordination der Bewegungen",
        "Bewegungssteuerung",
        "Nervenwachstum",
      ],
      "Vegetatives Nervensystem": [
        "Herzfrequenzregulation",
        "Atemfrequenzregulation",
        "Blutdruckregulation",
        "Temperaturregulation",
        "Schlaf-Wach-Rhythmus",
        "Schweißproduktion",
        "Kreislaufregulation",
        "Pupillenreaktion",
        "Hormonregulation",
        "Stoffwechselregulation",
      ],
      "Sensorische Funktionen": [
        "Sehfunktionen",
        "Hörfunktionen",
        "Gleichgewicht",
        "Tastsinn",
        "Schmerzempfindung",
        "Geruch",
        "Geschmack",
        "Temperaturwahrnehmung",
        "Propriozeption",
        "Visuelle Wahrnehmung",
      ],
    },
    "Sinnesfunktionen und Schmerz": {
      Sehen: [
        "Sehschärfe",
        "Farbwahrnehmung",
        "Tiefenwahrnehmung",
        "Kontrastsehen",
        "Dunkeladaption",
        "Blendempfindlichkeit",
        "Augenbewegungen",
        "Pupillenreaktion",
        "Gesichtsfeld",
        "Nah- und Fernsicht",
      ],
      Hören: [
        "Tonwahrnehmung",
        "Lautstärkewahrnehmung",
        "Sprachverständlichkeit",
        "Schalllokalisierung",
        "Frequenzwahrnehmung",
        "Tinnituswahrnehmung",
        "Audiometrische Funktionen",
        "Hochtonempfindlichkeit",
        "Tieftonempfindlichkeit",
        "Geräuschunterdrückung",
      ],
      Gleichgewicht: [
        "Vestibuläre Wahrnehmung",
        "Kopfpositionserkennung",
        "Richtungswahrnehmung",
        "Stabilität des Körpers",
        "Bewegungskoordination",
        "Körperbalance",
        "Gleichgewichtskontrolle",
        "Kippreflexe",
        "Kinästhetische Wahrnehmung",
        "Positionserkennung",
      ],
      "Tastsinn und Schmerzempfinden": [
        "Druckempfindung",
        "Schmerzempfindlichkeit",
        "Temperaturempfindung",
        "Tastsinn",
        "Propriozeption",
        "Berührungsempfindung",
        "Vibrationswahrnehmung",
        "Nozizeptoren",
        "Empfindlichkeit der Haut",
        "Tiefensensibilität",
      ],
      "Geruch und Geschmack": [
        "Riechwahrnehmung",
        "Geschmackserkennung",
        "Geruchsintensität",
        "Geschmacksknospen",
        "Geruchsschwelle",
        "Geschmackswahrnehmung",
        "Zungensensorik",
        "Riechzellen",
        "Nasenatmung",
        "Geschmackspapillen",
      ],
    },
    Bewegungsfunktionen: {
      Bewegungskoordination: [
        "Feinmotorik",
        "Grobmotorik",
        "Bewegungsplanung",
        "Bewegungsflüssigkeit",
        "Reflexe",
        "Bewegungsgenauigkeit",
        "Muskelkoordination",
        "Gelenkkoordination",
        "Stabilität der Bewegungen",
        "Koordination der Extremitäten",
      ],
      Muskelkraft: [
        "Muskeltonus",
        "Muskelkraft",
        "Muskelausdauer",
        "Muskelkontraktion",
        "Muskelentspannung",
        "Muskelspannung",
        "Muskelkoordination",
        "Muskelflexibilität",
        "Muskeln der Extremitäten",
        "Krafteinsatz",
      ],
      Bewegungsumfang: [
        "Gelenkbeweglichkeit",
        "Gelenksteifigkeit",
        "Bewegungsrange",
        "Gelenkfehlstellungen",
        "Bewegungsblockaden",
        "Bewegungsfreiheit",
        "Flexibilität",
        "Dehnbarkeit",
        "Bewegungsstörungen",
        "Gelenkfunktion",
      ],
      "Haltung und Mobilität": [
        "Körperhaltung",
        "Mobilitätseinschränkungen",
        "Mobilisationsfähigkeit",
        "Aufrichtungsfähigkeit",
        "Balance",
        "Gangkontrolle",
        "Stabilität",
        "Haltungskorrektur",
        "Bewegungskoordination",
        "Rückenfunktion",
      ],
    },
    "Körperliche Funktionsstörungen im Zusammenhang mit Atmung und Kreislaufsystem":
      {
        "Atemfrequenz und -tiefe": [
          "Hypoventilation",
          "Hyperventilation",
          "Atemfrequenz",
          "Atemzugvolumen",
          "Atemgeräusche",
          "Atemmuster",
          "Schnappatmung",
          "Atemnot",
          "Lungenvolumen",
          "Gasaustausch",
        ],
        "Herzfrequenz und Blutdruck": [
          "Tachykardie",
          "Bradykardie",
          "Blutdruckregulation",
          "Kreislaufstabilität",
          "Bluthochdruck",
          "Kreislaufstörungen",
          "Pulswellen",
          "Kreislaufschwäche",
          "Bluthochdruck",
          "Kreislaufreaktionen",
        ],
        "Sauerstoffaufnahme und -abgabe": [
          "Hypoxämie",
          "Hyperkapnie",
          "Atemnot",
          "Sauerstoffsättigung",
          "Sauerstoffaufnahme",
          "Gasaustauschrate",
          "Lungenfunktion",
          "Pulsoximetrie",
          "Blutsauerstoffgehalt",
          "Atemtherapie",
        ],
      },
    "Verdauungs- und Ausscheidungsfunktionen": {
      "Mund- und Rachenfunktionen": [
        "Speichelproduktion",
        "Schluckreflex",
        "Kauen",
        "Pharynxfunktionen",
        "Gaumensegel",
        "Zungenbewegungen",
        "Rachenmotorik",
        "Saugreflex",
        "Schluckvorgang",
        "Speicheldrüsenfunktion",
      ],
      "Magen-Darm-Funktionen": [
        "Magensäureproduktion",
        "Magenentleerung",
        "Peristaltik",
        "Absorption von Nährstoffen",
        "Verdauungskapazität",
        "Verdauungszeit",
        "Darmflora",
        "Stoffwechselprozesse",
        "Gallenproduktion",
        "Verdauungseffizienz",
      ],
    },
    "Endokrine und metabolische Funktionen": {
      Blutzuckerregulation: [
        "Insulinproduktion",
        "Glukagonproduktion",
        "Blutzuckerspiegel",
        "Zuckeraufnahme",
        "Kohlenhydratstoffwechsel",
        "Insulinempfindlichkeit",
        "Insulinresistenz",
        "Glukoseverwertung",
        "Glukosetransport",
        "Glykogenspeicherung",
      ],
    },
    "Haut- und Weichteilfunktionen": {
      Hautfunktionen: [
        "Hautdurchblutung",
        "Hautbarriere",
        "Temperaturwahrnehmung",
        "Hautregeneration",
        "Wundheilung",
        "Schweißproduktion",
        "Hautelastizität",
        "Tastsinn",
        "Schutzfunktion der Haut",
        "Hautrezeptoren",
      ],
    },
    "Psychische Funktionen": {
      "Kognitive Funktionen": [
        "Gedächtnis",
        "Aufmerksamkeitsfunktionen",
        "Wahrnehmung",
        "Problemlösungsfähigkeiten",
        "Entscheidungsfindung",
        "Planungsfähigkeiten",
        "Orientierung",
        "Urteilsvermögen",
        "Sprachverständnis",
        "Mentale Flexibilität",
      ],
      "Emotionale Funktionen": [
        "Gefühlserkennung",
        "Stimmung",
        "Frustrationstoleranz",
        "Stressbewältigung",
        "Selbstwertgefühl",
        "Emotionale Stabilität",
        "Reizempfindlichkeit",
        "Ängste",
        "Zornmanagement",
        "Empathie",
      ],
    },
    "Funktionen im Bereich der Kommunikation": {
      Sprachfunktionen: [
        "Sprachproduktion",
        "Sprachverständnis",
        "Artikulation",
        "Wortfindung",
        "Sprachgeschwindigkeit",
        "Stimmklang",
        "Prosodie (Tonfall)",
        "Sprechmotorik",
        "Sprachkomplexität",
        "Wortschatz",
      ],
    },
  },
  richtung: {
    "": [
      "Abduktion",
      "Adduktion",
      "Außenrotation",
      "Beugung",
      "Dorsalflexion",
      "Eversion",
      "Exspiration",
      "Extension",
      "Flexion",
      "Inspiration",
      "Innenrotation",
      "Kippbewegung",
      "Lateralflexion",
      "Plantarflexion",
      "Pronation",
      "Protraktion",
      "Reklination",
      "Retroflexion",
      "Rotation",
      "Senkung",
      "Streckung",
      "Supination",
      "Traktion",
      "Ventralflexion",
      "Anteversion",
      "Retroversion",
      "Zirkumduktion",
      "Gegendrehung",
      "Ausscheren",
      "Gelenkbewegung",
      "Spannung",
      "Ausdehnung",
      "Dehnung",
      "Kontraktion",
      "Erweiterung",
      "Entspannung",
    ],
  },
  qualität: {
    "": [
      "abgehackt",
      "abnorm",
      "anstrengend",
      "ausgeprägt",
      "ausstrahlend",
      "begrenzt",
      "behindernd",
      "brennend",
      "dumpf",
      "drückend",
      "eingeschränkt",
      "erschöpft",
      "fest",
      "flexibel",
      "fragil",
      "gering",
      "harte",
      "klopfend",
      "krampfartig",
      "krämpfend",
      "lähmend",
      "langsam",
      "langsamer",
      "mangelhaft",
      "mäßig",
      "mühsam",
      "nagend",
      "pulsierend",
      "reduziert",
      "ruckartig",
      "schlaff",
      "schmerzend",
      "schwach",
      "schwankend",
      "schwierig",
      "sehr schwach",
      "spastisch",
      "spärlich",
      "spannend",
      "spritzend",
      "starr",
      "stark",
      "stechend",
      "taub",
      "verkrampft",
      "verlangsamt",
      "vermindert",
      "verschoben",
      "wackelig",
      "widerstandsfähig",
      "zuckend",
    ],
  },
  grad: {
    "NAS (Numerische Analog Skala - Schmerz)": [
      "0 (Kein Schmerz)",
      "1-2 (Sehr leichter Schmerz)",
      "3-4 (Leichter Schmerz)",
      "5-6 (Mäßiger Schmerz)",
      "7-8 (Starker Schmerz)",
      "9 (Sehr starker Schmerz)",
      "10 (Schlimmster vorstellbarer Schmerz)",
    ],
    "Borg (Dyspnoe - Atemnot)": [
      "0 (Keine Atemnot)",
      "1-3 (Leichte Atemnot, keine Beeinträchtigung)",
      "4-5 (Moderat, spürbare Einschränkungen)",
      "6-7 (Starke Atemnot, bei körperlicher Anstrengung)",
      "8-9 (Sehr starke Atemnot, selbst bei Ruhe)",
      "10 (Unvorstellbare Atemnot, akute Einschränkungen)",
    ],
    "6-Minuten-Gehtest (Kardiopulmonale Ausdauer)": [
      "> 500 Meter (Normale Ausdauer)",
      "400-499 Meter (Leicht eingeschränkt)",
      "300-399 Meter (Moderat eingeschränkt)",
      "200-299 Meter (Schwer eingeschränkt)",
      "< 200 Meter (Sehr stark eingeschränkt)",
    ],
    "ROM (Range of Motion - Bewegungsumfang)": [
      "Normaler Bewegungsumfang (Keine Einschränkung)",
      "Eingeschränkter Bewegungsumfang (Teilweise eingeschränkter Bewegungsumfang)",
      "Sehr eingeschränkter Bewegungsumfang (Erhebliche Einschränkung)",
      "Keine Bewegung (Vollständige Blockierung der Bewegung)",
    ],
    "MRC (Muskelkrafttest - Manual Muscle Testing)": [
      "0 (Keine sichtbare Kontraktion)",
      "1 (Minimal sichtbare Kontraktion ohne Bewegung)",
      "2 (Bewegung ohne Schwerkraft)",
      "3 (Bewegung gegen Schwerkraft)",
      "4 (Bewegung gegen Widerstand, aber schwächer als normal)",
      "5 (Normale Muskelkraft, vollständiger Widerstand)",
    ],
    "BBS (Berg Balance Scale - Dynamisches Gleichgewicht)": [
      "0-20 (Sehr hohes Risiko für Stürze)",
      "21-40 (Mittleres Risiko für Stürze)",
      "41-56 (Geringes Risiko für Stürze)",
    ],
    "FMS (Functional Movement Screen - Funktionelle Beweglichkeit und Sicherheit)":
      [
        "0 (Schlechte Bewegungsqualität, hoher Risikofaktor)",
        "1 (Eingeschränkte Bewegungsqualität, mäßiger Risikofaktor)",
        "2 (Akzeptable Bewegungsqualität, geringer Risikofaktor)",
        "3 (Optimale Bewegungsqualität, kein Risikofaktor)",
      ],
    "FMA (Fugl-Meyer Assessment - Neurologische Beurteilung)": [
      "30-40 Punkte (Sehr gute Funktionswiederherstellung)",
      "20-29 Punkte (Mäßige Funktionswiederherstellung)",
      "10-19 Punkte (Eingeschränkte Funktionswiederherstellung)",
      "0-9 Punkte (Schwache oder keine Funktionswiederherstellung)",
    ],
    "ODI (Oswestry Disability Index - Funktionelle Beeinträchtigung bei Rückenschmerzen)":
      [
        "0-20% (Minimale Einschränkung)",
        "21-40% (Leichte Einschränkung)",
        "41-60% (Mäßige Einschränkung)",
        "61-80% (Schwere Einschränkung)",
        "81-100% (Vollständige Behinderung)",
      ],
    "MMSE (Mini Mental State Examination - Kognitive Beurteilung)": [
      "28-30 (Normal, keine kognitiven Beeinträchtigungen)",
      "20-27 (Leichte kognitive Beeinträchtigung)",
      "10-19 (Mäßige kognitive Beeinträchtigung)",
      "< 10 (Schwere kognitive Beeinträchtigung)",
    ],
    "WOMAC (Western Ontario and McMaster Universities Osteoarthritis Index - Arthrose)":
      [
        "0-20% (Minimale Symptome)",
        "21-40% (Leichte Symptome)",
        "41-60% (Moderat beeinträchtigt)",
        "61-80% (Schwer beeinträchtigt)",
        "81-100% (Vollständig beeinträchtigt)",
      ],
    "TUG (Timed Up and Go Test - Beweglichkeit und Sturzrisiko)": [
      "< 10 Sekunden (Normal)",
      "10-14 Sekunden (Leicht eingeschränkt)",
      "15-19 Sekunden (Moderat eingeschränkt)",
      "> 20 Sekunden (Stark eingeschränkt)",
    ],
    "SCT (Static Contact Test - Neurodynamische Beurteilung)": [
      "Normal (Keine Symptome)",
      "Eingeschränkt (Leichte Sensibilitätsstörung)",
      "Deutlich eingeschränkt (Schwere Sensibilitätsstörung)",
    ],
    "STarT Back Screening Tool (Rückenschmerzen)": [
      "Niedriges Risiko (Keine funktionellen Einschränkungen)",
      "Mittleres Risiko (Leichte Einschränkungen der Funktion)",
      "Hohes Risiko (Schwere Einschränkungen der Funktion)",
    ],
    "DASH (Disabilities of the Arm, Shoulder, and Hand - Funktion der oberen Extremität)":
      [
        "0-20 (Minimale Beeinträchtigung)",
        "21-40 (Leichte Beeinträchtigung)",
        "41-60 (Moderat beeinträchtigt)",
        "61-80 (Schwer beeinträchtigt)",
        "81-100 (Vollständig beeinträchtigt)",
      ],
    "Lequesne Index (Hüft- und Kniearthrose)": [
      "0-4 (Minimale Symptome)",
      "5-7 (Leichte Symptome)",
      "8-10 (Moderat bis schwer)",
      "11-14 (Sehr schwer)",
    ],
    "Friedreich Ataxia Rating Scale (Friedreich Ataxie)": [
      "0-10 (Leichte Beeinträchtigung)",
      "11-20 (Moderat eingeschränkt)",
      "21-30 (Schwer eingeschränkt)",
    ],
    "Elderly Mobility Scale (EMIS - Mobilität älterer Menschen)": [
      "1-5 (Leicht eingeschränkt)",
      "6-10 (Moderat eingeschränkt)",
      "11-15 (Schwer eingeschränkt)",
    ],
    "Gait and Balance Assessment (Ganganalyse und Balance)": [
      "Normal (Gute Koordination)",
      "Mäßig eingeschränkt (Leichte Koordinationsstörung)",
      "Stark eingeschränkt (Schwere Koordinationsstörung)",
    ],
    "Ankle-Hindfoot Scale (Knöchel-Hinterfuß Skala - Fußgelenk und Fuß)": [
      "0-20 (Normale Funktion)",
      "21-40 (Moderat eingeschränkt)",
      "41-60 (Schwer eingeschränkt)",
    ],
    "Tampa Scale of Kinesiophobia (Kinesiophobie)": [
      "17-24 (Niedriges Risiko)",
      "25-34 (Mittleres Risiko)",
      "35-54 (Hohes Risiko)",
    ],
    "Cognitive Function Test (Kognitive Beurteilung)": [
      "Normal (Keine Beeinträchtigung)",
      "Eingeschränkt (Leichte Einschränkungen)",
      "Schwer eingeschränkt (Signifikante kognitive Beeinträchtigung)",
    ],
    "FNS (Funktionelle Nervenstimulation - Sensomotorische Funktionen)": [
      "Normal (Keine Einschränkung)",
      "Eingeschränkt (Leichte Einschränkung)",
      "Deutlich eingeschränkt (Stark eingeschränkt)",
    ],
    "Purdue Pegboard Test (Fingerfertigkeit)": [
      "Normal (Keine Einschränkung)",
      "Mäßig eingeschränkt (Leichte Einschränkung)",
      "Stark eingeschränkt (Schwere Einschränkung)",
    ],
    "Modified Ashworth Scale (MAS) - Muskeltonus": [
      "0 (Normaler Tonus)",
      "1 (Leichte Erhöhung des Tonus)",
      "2 (Moderat erhöhte Spannung)",
      "3 (Erhöhte Spannung, bewegungsbeeinträchtigt)",
      "4 (Vollständige Steifigkeit)",
    ],
    "Shuttle Walk Test (Ausdauer)": [
      "12-15 Minuten (Normal)",
      "8-12 Minuten (Leicht eingeschränkt)",
      "< 8 Minuten (Stark eingeschränkt)",
    ],
    "Barthel Index (Aktivitäten des täglichen Lebens)": [
      "91-100 (Unabhängig)",
      "61-90 (Teilweise abhängig)",
      "0-60 (Vollständig abhängig)",
    ],
    "Ranchos Los Amigos Scale (Neurorehabilitation - Stadien der Erholung)": [
      "I (Keine Reaktion)",
      "II-IV (Minimal bis Reaktive Reaktion)",
      "V-VI (Verwirrung, teilw. Orientierung)",
      "VII-IX (Zunehmende Orientierung)",
    ],
    "Handicap Assessment (Beurteilung von Einschränkungen)": [
      "Kein Handicap (Voll funktionsfähig)",
      "Leicht eingeschränkt (Minimale Einschränkungen)",
      "Mäßig eingeschränkt (Deutliche Einschränkungen)",
      "Stark eingeschränkt (Vollständige Einschränkung)",
    ],
    "Neurotrophic Index (Nervenwachstum und -funktion)": [
      "Normal (Keine Beeinträchtigung)",
      "Mäßig betroffen (Leichte Beeinträchtigung)",
      "Stark betroffen (Erhebliche Beeinträchtigung)",
    ],
  },
  aktivität: {
    "ADL (Aktivitäten des täglichen Lebens)": {
      Körperpflege: [
        "Waschen",
        "Zähneputzen",
        "Rasieren",
        "Frisurpflege",
        "Hautpflege",
        "Baden",
        "Hautpflege (Fettung, Lotion)",
        "Nagelpflege",
        "Augenpflege",
        "Ohrenpflege",
      ],
      Ankleiden: [
        "An- und Ausziehen von Kleidung",
        "Schließen von Reißverschlüssen",
        "Krawatten binden",
        "Schuhe anziehen",
        "Hosen anziehen",
        "Jacke anziehen",
        "Socken anziehen",
        "Unterwäsche anziehen",
        "Gürtel anlegen",
        "Knöpfe schließen",
      ],
      Toilettengang: [
        "Toilette benutzen",
        "Hocke",
        "Stehen",
        "Sitzen auf der Toilette",
        "Hygiene nach dem Toilettengang",
        "Abwischen",
        "Wischen und Auswaschen",
      ],
    },
    "Mobilität und Bewegung": {
      Gehen: [
        "Aufrecht gehen",
        "Gehen auf unebenem Boden",
        "Gehen auf der Stelle",
        "Spaziergänge",
        "Treppen steigen",
        "Gehen mit Unterstützung",
        "Gehen bei Nebel oder Dunkelheit",
        "Gehen mit einem Stock",
        "Gehen auf längeren Distanzen",
        "Gehen bei schneller Geschwindigkeit",
      ],
      Laufen: [
        "Normales Laufen",
        "Laufen bei hoher Geschwindigkeit",
        "Sprinten",
        "Laufen auf unebenem Gelände",
        "Treppen laufen",
        "Laufen mit Hindernissen",
        "Laufen mit Ausdauer",
        "Langstreckenlauf",
        "Laufen nach einer Verletzung",
        "Laufen mit Prothesen",
      ],
      Treppensteigen: [
        "Treppe ohne Unterstützung steigen",
        "Treppe mit Unterstützung steigen",
        "Treppen steigen mit Gehstock",
        "Treppen mit Handlauf steigen",
        "Treppen steigen mit Rollstuhl",
        "Treppensteigen mit Hindernissen",
        "Schnell Treppen steigen",
        "Langsame Treppensteigen",
        "Hohe Treppen steigen",
        "Treppen mit Last steigen",
      ],
      Sitzen: [
        "Auf einem Stuhl sitzen",
        "Auf einem Kissen sitzen",
        "Auf dem Boden sitzen",
        "Auf einem Hocker sitzen",
        "Zu lange sitzen",
        "Langes Sitzen ohne Unterstützung",
        "Sitzen mit einer Orthese",
        "Sitzen nach einer Operation",
        "Stabilität beim Sitzen",
        "Sitzen während der Arbeit",
      ],
    },
    Transfers: {
      Bettenwechsel: [
        "Vom Bett aufstehen",
        "Vom Bett hinsetzen",
        "Ins Bett gehen",
        "Aus dem Bett aussteigen",
        "Im Bett umdrehen",
        "Schlafposition verändern",
        "Aufstehen und Sitzen auf der Bettkante",
        "Position im Bett ändern (auf der Seite, Rücken)",
        "Ins Bett zurückkehren",
        "Pflege des Bettes (Veränderung der Bettposition)",
      ],
      "Vom Stuhl in den Rollstuhl": [
        "Vom Stuhl auf den Rollstuhl",
        "Vom Rollstuhl auf den Stuhl",
        "Rollstuhl mit Unterstützung ausrichten",
        "Sitzen im Rollstuhl",
        "Rollstuhl aus einem anderen Stuhl heraus fahren",
        "Rollstuhl vom Bett in die Sitzposition bringen",
        "Rollstuhl vom Stuhl heben",
        "Rollstuhl auf einer ebenen Fläche bewegen",
        "Von der Liege in den Rollstuhl bewegen",
        "Rollstuhlübertragung bei Gelenkoperation",
      ],
      "Vom Rollstuhl in das Auto": [
        "Vom Rollstuhl in den Fahrersitz",
        "Vom Rollstuhl in den Beifahrersitz",
        "Ins Auto auf den Rücksitz",
        "Aus dem Auto steigen",
        "Rollstuhl ins Auto heben",
        "Einsteigen mit Hilfe",
        "Aussteigen mit Hilfe",
        "Platzierung von Rollstühlen im Kofferraum",
        "Selbstständiges Einsteigen",
        "Selbstständiges Aussteigen aus dem Auto",
      ],
      "Vom Rollstuhl in andere Möbel": [
        "Vom Rollstuhl auf den Sessel",
        "Vom Rollstuhl auf das Sofa",
        "Vom Rollstuhl auf den Stuhl im Essbereich",
        "Vom Rollstuhl auf eine Bank",
        "Vom Rollstuhl auf den Teppichboden",
        "Vom Rollstuhl auf einen Hocker",
        "Vom Rollstuhl auf eine Couch mit hoher Rückenlehne",
        "Vom Rollstuhl auf das Bett mit höherem Rand",
        "Vom Rollstuhl auf einen Barhocker",
        "Vom Rollstuhl auf einen Chefsessel",
      ],
    },
    "Sportliche Aktivitäten": {
      Krafttraining: [
        "Gewichtheben",
        "Kettlebell-Übungen",
        "Beinpresse",
        "Kniebeugen",
        "Schulterdrücken",
        "Übungen zur Stärkung der Muskulatur",
        "Rumpfstabilitätstraining",
        "Übung mit Widerstandsbändern",
        "Brustübungen",
        "Klimmzüge",
      ],
      Ausdauertraining: [
        "Joggen",
        "Radfahren",
        "Schwimmen",
        "Wandern",
        "Intervalltraining",
        "Steppen",
        "Aerobic",
        "Rudern",
        "Langstreckenlauf",
        "Tanzen",
      ],
      Koordinationstraining: [
        "Balanceübungen auf der Wackelplatte",
        "Koordinationsübungen mit einem Ball",
        "Übungen zur Verbesserung des Gleichgewichts",
        "Agility-Übungen",
        "Übungen mit Kordeln und Sprüngen",
        "Reaktionsschnelligkeitstraining",
        "Übungen mit einem Springseil",
        "Jonglieren",
        "Bewegungsübungen mit Widerstandsbändern",
        "Übungen mit Fitnessgeräten zur Verbesserung der Hand-Augen-Koordination",
      ],
      "Sportartspezifische Übungen": [
        "Fußballübungen",
        "Basketballübungen",
        "Tennisübungen",
        "Volleyballübungen",
        "Leichtathletikübungen",
        "Schwimmtraining",
        "Fahrradfahren auf einem Parcours",
        "Kraft- und Ausdauertraining für bestimmte Sportarten",
        "Fußballspiel",
        "Zumba oder andere Tanzarten",
      ],
    },
  },
  partizipation: {
    "Gesellschaftliche Teilhabe": {
      "Arbeit und Beschäftigung": [
        "Berufliche Arbeit",
        "Arbeit in der Freizeit",
        "Ehrenamtliche Tätigkeit",
        "Arbeiten im Homeoffice",
        "Studium",
        "Berufliche Weiterbildung",
        "Praktikum",
        "Stellenbewerbung",
        "Berufswechsel",
        "Karriereplanung",
      ],
      Geselligkeit: [
        "Freizeitaktivitäten",
        "Besuch von Veranstaltungen",
        "Essen gehen",
        "Feiern und Partys",
        "Freundschaften pflegen",
        "Einladungen annehmen",
        "Einladung zu sozialen Anlässen",
        "Urlaubsreisen",
        "Spaziergänge in der Natur",
        "Teilnahme an öffentlichen Veranstaltungen",
      ],
      Familienleben: [
        "Familienfeiern",
        "Kinderbetreuung",
        "Elternschaft",
        "Pflege von Verwandten",
        "Kindererziehung",
        "Familienunterhalt",
        "Familienaktivitäten",
        "Teilnahme an Familientreffen",
        "Familienurlaube",
        "Gemeinsames Kochen und Essen",
      ],
    },
    "Kommunikation und Informationsaustausch": {
      "Sprachliche Kommunikation": [
        "Sprechen in Gesprächen",
        "Telefondiskussionen",
        "Gespräch in Gruppen",
        "Fragen stellen",
        "Textnachrichten senden",
        "Teilnahme an Konferenzen",
        "Verwendung von Gebärdensprache",
        "Sprachbarrieren überwinden",
        "Zuhören",
        "Ausdruck von Meinungen",
      ],
      "Technologie nutzen": [
        "Computernutzung",
        "Handynutzung",
        "Internetrecherche",
        "Online-Kommunikation",
        "Soziale Medien nutzen",
        "Nutzung von Hilfsmitteln",
        "App-Nutzung",
        "E-Mails senden",
        "Teilnahme an Webinaren",
        "Videokonferenzen",
      ],
      "Mobilität und Reisen": [
        "Reisen ins Ausland",
        "Reisen in die Stadt",
        "Reisen zu Geschäftsmeetings",
        "Flugreisen",
        "Autofahren",
        "Nutzung öffentlicher Verkehrsmittel",
        "Fernreisen",
        "Autonomes Reisen",
        "Reisen mit Hilfsmitteln",
        "Reisen bei Einschränkungen",
      ],
      "Kulturelle Aktivitäten und Mitgestaltung": [
        "Teilnahme an kulturellen Veranstaltungen",
        "Teilnahme an Kunst- und Musikfestivals",
        "Mitwirken in einer religiösen Gemeinschaft",
        "Teilnahme an Kursen und Workshops",
        "Teilnahme an Bildungsaktivitäten",
        "Engagement in politischen Bewegungen",
        "Teilnahme an Theater- und Filmvorführungen",
        "Freiwilligenarbeit",
        "Kulturreisen",
        "Kunstproduktion",
      ],
    },
    "Klinikspezifische Aktivitäten (Rehabilitation und Therapie)": {
      "Teilnahme an rehabilitativen Maßnahmen": [
        "Teilnahme an Krankengymnastik",
        "Teilnahme an Ergotherapie",
        "Teilnahme an Logopädie",
        "Teilnahme an Schmerztherapie",
        "Teilnahme an Gruppentherapie",
        "Teilnahme an Bewegungstherapie",
        "Teilnahme an Gesundheitsberatung",
        "Teilnahme an Selbsthilfegruppen",
        "Teilnahme an psychosozialer Beratung",
        "Teilnahme an Ernährungstherapie",
      ],
      "Teilnahme an speziellen Therapieprogrammen": [
        "Teilnahme an geriatrischen Therapieprogrammen",
        "Teilnahme an neurologischen Therapieprogrammen",
        "Teilnahme an kardiologischen Rehabilitationsprogrammen",
        "Teilnahme an muskuloskelettalen Therapieprogrammen",
        "Teilnahme an Atemtherapieprogrammen",
        "Teilnahme an postoperativen Rehabilitationsmaßnahmen",
        "Teilnahme an Fitness- und Gesundheitstrainingsprogrammen",
        "Teilnahme an Onkologie-Rehabilitation",
        "Teilnahme an sportphysiotherapeutischen Programmen",
        "Teilnahme an Aquatherapie",
      ],
      "Teilnahme an Diagnostik- und Behandlungsprozessen": [
        "Teilnahme an ärztlichen Untersuchungen",
        "Teilnahme an Röntgenuntersuchungen",
        "Teilnahme an Laboruntersuchungen",
        "Teilnahme an CT/MRT-Untersuchungen",
        "Teilnahme an medizinischen Diagnosetests",
        "Teilnahme an Präventionsprogrammen",
        "Teilnahme an Ernährungsberatung",
        "Teilnahme an Schmerzmanagement-Programmen",
        "Teilnahme an psychosomatischen Behandlungen",
        "Teilnahme an Post-COVID-Rehabilitation",
      ],
      "Teilnahme an Gesundheitsförderung und Prävention": [
        "Teilnahme an regelmäßigen Gesundheitschecks",
        "Teilnahme an Impfprogrammen",
        "Teilnahme an Bewegungs- und Fitnessprogrammen",
        "Teilnahme an Ernährungsprogrammen",
        "Teilnahme an Stressbewältigungsprogrammen",
        "Teilnahme an Suchtpräventionsprogrammen",
        "Teilnahme an Programmen zur Lebensstiländerung",
        "Teilnahme an Raucherentwöhnungsprogrammen",
        "Teilnahme an Angstbewältigungsprogrammen",
        "Teilnahme an allgemeinen Gesundheitsvorsorgemaßnahmen",
      ],
    },
  },
};

// Funktionen für das Modul "Ort"
function showOrtEbene2() {
  const ebene1 = document.getElementById("ortEbene1").value;
  resetDropdowns(["ortEbene2", "ortEbene3", "ortEbene4"]);
  if (data.ort && data.ort[ebene1]) {
    populateDropdown("ortEbene2", Object.keys(data.ort[ebene1]));
  }
}

function showOrtEbene3() {
  const ebene1 = document.getElementById("ortEbene1").value;
  const ebene2 = document.getElementById("ortEbene2").value;
  resetDropdowns(["ortEbene3", "ortEbene4"]);
  if (data.ort[ebene1] && data.ort[ebene1][ebene2]) {
    const options = data.ort[ebene1][ebene2];
    if (Array.isArray(options)) {
      populateDropdown("ortEbene3", options);
    } else {
      populateDropdown("ortEbene3", Object.keys(options));
    }
  }
}

function showOrtEbene4() {
  const ebene1 = document.getElementById("ortEbene1").value;
  const ebene2 = document.getElementById("ortEbene2").value;
  const ebene3 = document.getElementById("ortEbene3").value;
  resetDropdowns(["ortEbene4"]);
  if (
    data.ort[ebene1] &&
    data.ort[ebene1][ebene2] &&
    data.ort[ebene1][ebene2][ebene3]
  ) {
    populateDropdown("ortEbene4", data.ort[ebene1][ebene2][ebene3]);
  }
}

// Funktionen für das Modul "Art"
function showArtEbene2() {
  const ebene1 = document.getElementById("artEbene1").value;
  resetDropdowns(["artEbene2", "artEbene3"]);
  if (data.art && data.art[ebene1]) {
    populateDropdown("artEbene2", Object.keys(data.art[ebene1]));
  }
}

function showArtEbene3() {
  const ebene1 = document.getElementById("artEbene1").value;
  const ebene2 = document.getElementById("artEbene2").value;
  resetDropdowns(["artEbene3"]);
  if (data.art[ebene1] && data.art[ebene1][ebene2]) {
    populateDropdown("artEbene3", data.art[ebene1][ebene2]);
  }
}

// Funktion für das Modul "Richtung"
function populateRichtungDropdown() {
  const richtungOptions = data.richtung || [];
  const richtungSelect = document.getElementById("richtungEbene1");
  richtungSelect.innerHTML = `<option value="">Bitte auswählen</option>`;
  richtungOptions.forEach((option) => {
    richtungSelect.innerHTML += `<option value="${option}">${option}</option>`;
  });
  document.getElementById(`richtungEbene1-container`).style.display = "block";
}

// Funktion für das Modul "Qualität"
function populateQualitaetDropdown() {
  const qualitaetOptions = data.qualitaet || [];
  const qualitaetSelect = document.getElementById("qualitaetEbene1");
  qualitaetSelect.innerHTML = `<option value="">Bitte auswählen</option>`;
  qualitaetOptions.forEach((option) => {
    qualitaetSelect.innerHTML += `<option value="${option}">${option}</option>`;
  });
  document.getElementById(`qualitaetEbene1-container`).style.display = "block";
}

// Funktionen für das Modul "Grad"
function showGradEbene2() {
  const gradEbene1 = document.getElementById("gradEbene1").value; // Erster Dropdown-Wert
  const gradEbene2Container = document.getElementById("gradEbene2-container");
  const gradEbene2Select = document.getElementById("gradEbene2");

  // Zurücksetzen der Inhalte des zweiten Dropdowns
  gradEbene2Select.innerHTML = `<option value="">Bitte auswählen</option>`;

  // Überprüfen, ob Daten für die Auswahl vorhanden sind
  if (data.grad[gradEbene1]) {
    // Optionen hinzufügen
    data.grad[gradEbene1].forEach((option) => {
      gradEbene2Select.innerHTML += `<option value="${option}">${option}</option>`;
    });
    gradEbene2Container.style.display = "block"; // Zeige das zweite Dropdown
  } else {
    gradEbene2Container.style.display = "none"; // Verberge das zweite Dropdown, falls leer
  }
}

// Funktionen für das Modul "Aktivität"
function showAktivitätEbene2() {
  const ebene1 = document.getElementById("aktivitätEbene1").value;
  resetDropdowns(["aktivitätEbene2", "aktivitätEbene3"]); // Setzt untere Ebenen zurück
  if (data.aktivität[ebene1]) {
    populateDropdown("aktivitätEbene2", Object.keys(data.aktivität[ebene1]));
  }
}

function showAktivitätEbene3() {
  const ebene1 = document.getElementById("aktivitätEbene1").value;
  const ebene2 = document.getElementById("aktivitätEbene2").value;
  resetDropdowns(["aktivitätEbene3"]); // Setzt dritte Ebene zurück
  if (data.aktivität[ebene1] && data.aktivität[ebene1][ebene2]) {
    populateDropdown("aktivitätEbene3", data.aktivität[ebene1][ebene2]);
  }
}

// Funktionen für das Modul "Partizipation"
function showPartizipationEbene2() {
  const ebene1 = document.getElementById("partizipationEbene1").value;
  resetDropdowns(["partizipationEbene2", "partizipationEbene3"]);
  if (data.partizipation[ebene1]) {
    populateDropdown(
      "partizipationEbene2",
      Object.keys(data.partizipation[ebene1])
    );
  }
}

function showPartizipationEbene3() {
  const ebene1 = document.getElementById("partizipationEbene1").value;
  const ebene2 = document.getElementById("partizipationEbene2").value;
  resetDropdowns(["partizipationEbene3"]);
  if (data.partizipation[ebene1][ebene2]) {
    populateDropdown("partizipationEbene3", data.partizipation[ebene1][ebene2]);
  }
}

// Funktion zur Dropdown-Befüllung
function populateDropdown(id, options) {
  const select = document.getElementById(id);
  select.innerHTML = `<option value="">Bitte auswählen</option>`;
  options.forEach((option) => {
    select.innerHTML += `<option value="${option}">${option}</option>`;
  });
  document.getElementById(`${id}-container`).style.display = "block";
}

// Reset-Funktion für Dropdowns
function resetDropdowns(ids) {
  ids.forEach((id) => {
    const select = document.getElementById(id);
    select.innerHTML = `<option value="">Bitte auswählen</option>`;
    document.getElementById(`${id}-container`).style.display = "none";
  });
}

// Funktion zur Generierung der physiotherapeutischen Diagnose
// Funktion zur Generierung der Diagnose
function generateDiagnosis() {
  // Werte aus den Dropdowns holen
  const lage = document.getElementById("lage").value || "";
  const ortArray = [document.getElementById("ortEbene1").value, document.getElementById("ortEbene2").value, document.getElementById("ortEbene3").value, document.getElementById("ortEbene4").value]
    .filter(e => e && e !== "Bitte auswählen");
  const artArray = [document.getElementById("artEbene1").value, document.getElementById("artEbene2").value, document.getElementById("artEbene3").value]
    .filter(e => e && e !== "Bitte auswählen");
  const richtung = document.getElementById("richtung").value || "";
  const qualitaet = document.getElementById("qualität").value || "";
  const gradEbene1 = document.getElementById("gradEbene1").value || "";
  const gradEbene2 = document.getElementById("gradEbene2").value || "";
  const grad = gradEbene1 && gradEbene2 ? `${gradEbene1.split("(")[0].trim()}: ${gradEbene2.split("(")[0].trim()}` : "";
  const aktivitaetArray = [document.getElementById("aktivitätEbene1").value, document.getElementById("aktivitätEbene2").value, document.getElementById("aktivitätEbene3").value]
    .filter(e => e && e !== "Bitte auswählen");
  const partizipationArray = [document.getElementById("partizipationEbene1").value, document.getElementById("partizipationEbene2").value, document.getElementById("partizipationEbene3").value]
    .filter(e => e && e !== "Bitte auswählen");

  // Letzte Werte aus den Arrays für Formulierung
  const ort = ortArray.length ? ortArray[ortArray.length - 1] : "";
  const art = artArray.length ? artArray[artArray.length - 1] : "";
  const aktivitaet = aktivitaetArray.length ? aktivitaetArray[aktivitaetArray.length - 1] : "";
  const partizipation = partizipationArray.length ? partizipationArray.join(" ") : "";

  let diagnosis = "";

  // 1. Art der Funktion und Qualität
  if (art) {
    const adjektiv = qualitaet ? adjustAdjective(qualitaet, art) : "Eingeschränkte";
    diagnosis += `${adjektiv} ${capitalizeFirstLetter(art.toLowerCase())}`;
  }

  // 2. Grad in Klammern
  if (grad) {
    diagnosis += ` (${grad})`;
  }

  // 3. Lage und Ort
  if (lage || ort) {
    diagnosis += ` ${lage ? `(${lage.toLowerCase()})` : ""} im ${adjustGenusForOrt(ort)}`;
  }

  // 4. Richtung (optional)
  if (richtung) {
    diagnosis += ` in ${capitalizeFirstLetter(richtung)}`;
  }

  // 5. Aktivität (optional)
  if (aktivitaet) {
    diagnosis += ` ${adjustActivityPhrase(aktivitaet)}`;
  }

  // 6. Partizipation (optional)
  if (partizipation) {
    diagnosis += ` während ${adjustParticipationPhrase(partizipation)}`;
  }

  diagnosis += ".";

  // Standardtext, falls alle Felder leer sind
  if (!art && !ort && !richtung && !lage && !qualitaet && !grad && !aktivitaet && !partizipation) {
    diagnosis = "Keine Diagnose ausgewählt.";
  }

  // Zeige die Diagnose im Ergebnisbereich
  const resultContainer = document.querySelector(".result-container");
  resultContainer.classList.add("diagnosis-mode");
  resultContainer.innerHTML = `<p class="diagnosis-text">${capitalizeFirstLetter(diagnosis)}</p>`;

  // Kopieren in die Zwischenablage
  navigator.clipboard.writeText(diagnosis).then(() => {
    console.log("Diagnose erfolgreich kopiert.");
  }).catch(err => {
    console.error("Fehler beim Kopieren:", err);
  });
}

// Funktion zur Großschreibung des ersten Buchstabens
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Funktion zur Anpassung des Adjektivs an das Substantiv (Genus-Anpassung)
function adjustAdjective(qualitaet, art) {
  const feminineWords = ["Muskelkraft", "Bewegungskoordination", "Propriozeption", "Beweglichkeit"];
  const neutralWords = ["Schmerzempfinden", "System", "Schutzfunktion"];
  const masculineWords = ["Muskeltonus", "Gelenkbeweglichkeit", "Stabilität"];
  
  if (feminineWords.includes(art)) {
    return qualitaet.charAt(0).toUpperCase() + qualitaet.slice(1) + "e";
  }
  if (neutralWords.includes(art)) {
    return qualitaet.charAt(0).toUpperCase() + qualitaet.slice(1) + "es";
  }
  if (masculineWords.includes(art)) {
    return qualitaet.charAt(0).toUpperCase() + qualitaet.slice(1) + "er";
  }
  return qualitaet;
}

// Funktion zur Anpassung des Genus und der Präposition für Orte
function adjustGenusForOrt(ort) {
  if (ort.includes("System")) {
    return "kardio-respiratorischen System";
  }
  if (ort.includes("Muskulatur") || ort.includes("Hüfte")) {
    return "der Hüfte";
  }
  if (ort.includes("Gelenkkapsel")) {
    return "der Gelenkkapsel";
  }
  return `dem ${ort.toLowerCase()}`;
}

// Funktion zur Anpassung der Präpositionen für Aktivitäten
function adjustActivityPhrase(aktivitaet) {
  if (aktivitaet.toLowerCase().endsWith("en") || aktivitaet.toLowerCase().includes("übungen") || aktivitaet.toLowerCase().includes("treppen")) {
    return `bei den ${aktivitaet}`;
  }
  return `beim ${aktivitaet}`;
}

// Funktion zur Korrektur der Präpositionen bei Partizipation
function adjustParticipationPhrase(partizipation) {
  if (partizipation.toLowerCase().includes("familienleben")) {
    return "der Familienbetreuung";
  }
  if (partizipation.toLowerCase().includes("reisen")) {
    return "der Reiseaktivitäten";
  }
  if (partizipation.toLowerCase().includes("klinikspezifische aktivitäten")) {
    return "klinikspezifischen Aktivitäten (Rehabilitation und Therapie)";
  }
  if (partizipation.toLowerCase().includes("gesellschaftliche teilhabe")) {
    return "gesellschaftlichen Teilhabe";
  }
  return partizipation.toLowerCase();
}

// Rücksetzen auf Standardbutton bei Dropdown-Änderung
document.querySelectorAll("select").forEach(select => {
  select.addEventListener("change", () => {
    const resultContainer = document.querySelector(".result-container");
    resultContainer.classList.remove("diagnosis-mode");
    resultContainer.innerHTML = `<p class="diagnose-button-text">Funktionelle Diagnose generieren</p>`;
  });
});


// Initialisierung
document.addEventListener("DOMContentLoaded", () => {
  populateRichtungDropdown(); // Modul "Richtung"
  populateQualitaetDropdown(); // Modul "Qualität"
});
