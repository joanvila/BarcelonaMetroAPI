exports.linesColor = {L1: '#D5262E', L2: '#87328B', L3: '#49AC3B', L4: '#FCAF00',
  L5: '#2767BF', L9: '#F07012', L10: '#179DEF', L11: '#9BC848',
  TRAMVIABLAU: '#0034A2', FUNICULARDEMONTJUÏC: '#014228',
  TELEFÈRICDEMONTJUÏC: '#56A1E5'}

exports.L1 = {HospitaldeBellvitge: 0, Bellvitge: 1, 'Av.Carrilet': 2,
  'Rbla.JustOliveres': 3, CanSerra: 4, Florida: 5, Torrassa: 6, SantaEulàlia: 7,
  MercatNou: 8, PlaçadeSants: 9, Hostafrancs: 10, Espanya: 11, Rocafort: 12,
  Urgell: 13, Universitat: 14, Catalunya: 15, Urquinaona: 16, ArcdeTriomf: 17,
  Marina: 18, Glòries: 19, Clot: 20, Navas: 21, LaSagrera: 22, FabraiPuig: 23,
  SantAndreu: 24, TorresiBages: 25, TrinitatVella: 26, BaródeViver: 27,
  SantaColoma: 28, Fondo: 29}

exports.L2 = {'Paral.lel': 0, SantAntoni: 1, Universitat: 2, PasseigdeGràcia: 3,
  Tetuan: 4, Monumental: 5, SagradaFamília: 6, Encants: 7, Clot: 8, BacdeRoda: 9,
  SantMartí: 10, LaPau: 11, Verneda: 12, 'ArtiguesSantAdrià': 13, SantRoc: 14,
  Gorg: 15, PepVentura: 16, BadalonaPompeuFabra: 17}

exports.L3 = {ZonaUniversitària: 0, PalauReial: 1, MariaCristina: 2, LesCorts: 3,
  PlaçadelCentre: 4, SantsEstació: 5, Tarragona: 6, Espanya: 7, PobleSec: 8,
  'Paral.lel': 9, Drassanes: 10, Liceu: 11, Catalunya: 12, PasseigdeGràcia: 13,
  Diagonal: 14, Fontana: 15, Lesseps: 16, Vallcarca: 17, Penitents: 18,
  "Valld'Hebrón": 19, Montbau: 20, Mundet: 21, Valldaura: 22, Canyelles: 23,
  Roquetes: 24, TrinitatNova: 25}

exports.L4 = {TrinitatNova: 0, ViaJúlia: 1, Llucmajor: 2, Maragall: 3,
  'Guinardó|HospitaldeSantPau': 4, AlfonsX: 5, Joanic: 6, Verdaguer: 7,
  Girona: 8, PasseigdeGràcia: 9, Urquinaona: 10, JaumeI: 11, Barceloneta: 12,
  'CiutadellaVilaOlímpica': 13, Bogatell: 14, Llacuna: 15, Poblenou: 16,
  SelvadeMar: 17, 'ElMaresme|Fórum': 18, BesòsMar: 19, Besòs: 20, LaPau: 21}

exports.L5 = {CornellàCentre: 0, Gavarra: 1, SantIldefons: 2, CanBoixeres: 3,
  CanVidalet: 4, PubillaCases: 5, Collblanc: 6, Badal: 7, PlaçadeSants: 8,
  SantsEstació: 9, Entença: 10, HospitalClínic: 11, Diagonal: 12, Verdaguer: 13,
  SagradaFamília: 14, 'SantPau|DosdeMaig': 15, "CampdeL'Arpa": 16, LaSagrera: 17,
  Congrés: 18, Maragall: 19, VirreiAmat: 20, Vilapicina: 21, Horta: 22,
  ElCarmel: 23, 'ElColl|LaTeixonera': 24, "Valld'Hebrón": 25}

exports.L9 = {'LaSagrera_V.FelipII': 0, OnzedeSetembre: 1, BonPastor: 2, CanPeixauet: 3,
  SantaRosa: 4, Fondo: 5, EsglésiaMajor: 6, Singuerlín: 7, CanZam: 8}

exports.L10 = {'LaSagrera_V.FelipII': 0, OnzedeSetembre: 1, BonPastor: 2, Llefià: 3,
  LaSalut: 4, Gorg: 5}

exports.L11 = {TrinitatNova: 0, "CasadeL'Aigua": 1, 'TorreBaró|Vallbona': 2,
  CiutatMeridiana: 3, CanCuiàs: 4}

exports.TRAMVIABLAU = {'Av.Tibidabo': 0, 'Pl.delFunicular': 1}

exports.FUNICULARDEMONTJUÏC = {'Paral.lel': 0, ParcMontjuic: 1, Castell: 2}

exports.TELEFÈRICDEMONTJUÏC = {ParcMontjuic: 0, Mirador: 1, Castell: 2}

exports.tarifes = {
  Barelona: {
    Catala: {
      BitlletSenzill: {nomTarifa: 'BitlletSenzill', tipusTarifa: 'BitlletsSenzills', descripcio: "Títol de TMB vàlid per fer un viatge en metro, en bus o en el funicular de Montjuïc. És un títol unipersonal no integrat.", preu: '2.15€'},
      'T-10': {nomTarifa: 'T-10', tipusTarifa: 'AbonamentsIntegrats', descripcio: "Títol multipersonal vàlid per fer 10 desplaçaments integrats d'1 a 6 zones, en què es disposa, en el cas d'un títol d'una zona, de 75 minuts entre la primera i l'última validació. El termini s'incrementa 15 minuts per cada zona.", preu: '9.95€'},
      'T-Mes': {nomTarifa: 'T-Mes', tipusTarifa: 'AbonamentsIntegrats', descripcio: "Títol personal i intransferible vàlid per fer un nombre il·limitat de viatges durant 30 dies consecutius des de la primera validació. Ha d'anar acompanyat del DNI o de carnets acreditatius dels operadors. El número del document que serveixi com a acreditació ha de figurar imprès al títol.", preu: '52.75€'},
      'T-Jove': {nomTarifa: 'T-Jove', tipusTarifa: 'AbonamentsIntegrats', descripcio: 'Títol personalitzat vàlid per fer un nombre il·limitat de viatges durant 90 dies consecutius des de la primera cancel·lació per a menors de 25 anys que ho acreditin amb un carnet especial i personalitzat, mitjançant DNI, NIE o passaport. El número del DNI, NIE o passaport que serveixi com a acreditació ha de figurar imprès al títol.', preu: '105€'},
      'T-Dia': {nomTarifa: 'T-Dia', tipusTarifa: 'AbonamentsIntegrats', descripcio: "Desplaçaments il·limitats en les zones delimitades per la primera validació, en tots els mitjans de transport segons les zones que es volen travessar (d'1 a 6 zones). Validesa: 1 dia des de la primera validació i fins a la finalització del servei. Títol unipersonal.", preu: '7.60€'},
      'T-50/30': {nomTarifa: 'T-50/30', tipusTarifa: 'AbonamentsIntegrats', descripcio: "Títol unipersonal vàlid per fer 50 desplaçaments integrats en 30 dies consecutius a partir de la primera validació, en què es disposa, en el cas d'un títol d'una zona, de 75 minuts entre la primera i l'última validació. El termini s'incrementa 15 minuts per cada zona.", preu: '42.50€'},
      'T-Trimestre': {nomTarifa: 'T-Trimestre', tipusTarifa: 'AbonamentsIntegrats', descripcio: "Títol personalitzat i intransferible vàlid per fer un nombre il·limitat de viatges durant 90 dies consecutius des de la primera cancel·lació. Ha d'anar acompanyat del DNI o de carnets acreditatius dels operadors. El número del document que serveixi com a acreditació ha de figurar imprès al títol.", preu: '142€'},
      'T-70/30': {nomTarifa: 'T-70/30', tipusTarifa: 'AbonamentsIntegrats', descripcio: "Títol multipersonal vàlid per fer 70 viatges en 30 dies consecutius des de la primera cancel·lació, en què es disposa, en el cas d'un títol d'una zona, de 75 minuts entre la primera i l'última validació. El termini s'incrementa 15 minuts per cada zona.", preu: '59.50€'},
      'T-4': {nomTarifa: 'T-4', tipusTarifa: 'AbonamentsEspecials', descripcio: "Títol unipersonal vàlid per fer 10 desplaçaments integrats a la xarxa d'autobusos i metro de TMB (excepte els serveis especials i el Barcelona Bus Turístic), la xarxa d'autobús de l’Àrea Metropolitana de Barcelona (AMB), Ferrocarrils de la Generalitat de Catalunya (FGC) i Tram (únicament zona 1).", preu: '3.90€'},
      'T-MesFM/FNgeneral': {nomTarifa: 'T-MesFM/FNgeneral', tipusTarifa: 'AbonamentsEspecials', descripcio: "Títol personal i intransferible vàlid per fer un nombre il·limitat de viatges durant 30 dies consecutius per a membres de famílies monoparentals i famílies nombroses de categoria general. Ha d'anar acompanyat del DNI i del  carnet de família nombrosa Obre la pàgina en una finestra nova o de l'acreditació de família monoparental Obre la pàgina en una finestra nova , de Catalunya o de la resta de l'Estat.", preu: '42.20€'},
      'T-FM/FN70/90general': {nomTarifa: 'T-FM/FN70/90general', tipusTarifa: 'AbonamentsEspecials', descripcio: "Abonament multipersonal de 90 dies per a membres de famílies monoparentals i famílies nombroses de categoria general que permet fer 70 desplaçaments. Ha d'anar acompanyat del DNI i del carnet de familia nombrosa Obre la pàgina en una finestra nova o de l'acreditació de família monoparental Obre la pàgina en una finestra nova. És un títol horari, en què es disposa d'1 hora i 15 minuts per fer un desplaçament en el cas del títol d'una zona. El termini s'incrementa 15 minuts per cada zona addicional.", preu: '55.70€'},
      'T-TrimestreFM/FNgeneral': {nomTarifa: 'T-TrimestreFM/FNgeneral', tipusTarifa: 'AbonamentsEspecials', descripcio: "Abonament personal de 90 dies per a membres de famílies monoparentals i famílies nombroses de categoria general. Ha d'anar acompanyat del DNI i del  carnet de família nombrosa Obre la pàgina en una finestra nova o de l'acreditació de família monoparental Obre la pàgina en una finestra nova , de Catalunya o de la resta de l'Estat.", preu: '113.60€'},
      'T-JoveFM/FNgeneral': {nomTarifa: 'T-JoveFM/FNgeneral', tipusTarifa: 'AbonamentsEspecials', descripcio: "Abonament personal de 90 dies per a joves menors de 25 anys que siguin membres de famílies monoparentals o famílies nombroses de categoria general. Ha d'anar acompanyat del DNI i del carnet de família nombrosa Obre la pàgina en una finestra nova o de l'acreditació de família monoparental Obre la pàgina en una finestra nova , de Catalunya o de la resta de l'Estat.", preu: '84€'},
      'T-MesFM/FNespecial': {nomTarifa: 'T-MesFM/FNespecial', tipusTarifa: 'AbonamentsEspecials', descripcio: "Títol personal i intransferible vàlid per fer un nombre il·limitat de viatges durant 30 dies consecutius per a membres de famílies monoparentals i famílies nombroses de categoria especial. Ha d'anar acompanyat del DNI i del carnet de família nombrosa Obre la pàgina en una finestra nova o de l'acreditació de família monoparental Obre la pàgina en una finestra nova , de Catalunya o de la resta de l'Estat.", preu: '26.40€'},
      'T-FM/FN70/90especial': {nomTarifa: 'T-FM/FN70/90especial', tipusTarifa: 'AbonamentsEspecials', descripcio: "Abonament multipersonal de 90 dies per a membres de famílies monoparentals i famílies nombroses de categoria especial, que permet fer 70 desplaçaments. Ha d'anar acompanyat del DNI i del carnet de família nombrosa Obre la pàgina en una finestra nova o de l'acreditació de família monoparental Obre la pàgina en una finestra nova. És un títol horari, en què es disposa d'1 hora i 15 minuts per fer un desplaçament en el cas del títol d'una zona. El termini s'incrementa 15 minuts per cada zona addicional.", preu: '34.80€'},
      'T-TrimestreFM/FNespecial': {nomTarifa: 'T-TrimestreFM/FNespecial', tipusTarifa: 'AbonamentsEspecials', descripcio: "Abonament personal de 90 dies per a membres de famílies monoparentals i famílies nombroses de categoria especial. Ha d'anar acompanyat del DNI i del carnet de família nombrosa Obre la pàgina en una finestra nova o de l'acreditació de família monoparental Obre la pàgina en una finestra nova , de Catalunya o de la resta de l'Estat.", preu: '71€'},
      'T-JoveFM/FNespecial': {nomTarifa: 'T-JoveFM/FNespecial', tipusTarifa: 'AbonamentsEspecials', descripcio: "Abonament personal de 90 dies per a joves menors de 25 anys que siguin membres de famílies monoparentals i famílies nombroses de categoria especial. Ha d'anar acompanyat del DNI i del carnet de família nombrosa Obre la pàgina en una finestra nova o de l'acreditació de família monoparental Obre la pàgina en una finestra nova , de Catalunya o de la resta de l'Estat.", preu: '52.50€'},
      '2Dies': {nomTarifa: '2Dies', tipusTarifa: 'AbonamentsPerDies', descripcio: "Amb la teva Hola BCN! podràs fer viatges il·limitats per Barcelona i l'àrea metropolitana en transport públic: metro, autobús (TMB), funicular de Montjuïc, tramvia (TRAM), línies urbanes de ferrocarril (FGC) i la zona 1 del tren de rodalies (Rodalies de Catalunya, accés a l’aeroport del Prat). Tants viatges com necessitis!", preu: '14€'},
      '3Dies': {nomTarifa: '3Dies', tipusTarifa: 'AbonamentsPerDies', descripcio: "Amb la teva Hola BCN! podràs fer viatges il·limitats per Barcelona i l'àrea metropolitana en transport públic: metro, autobús (TMB), funicular de Montjuïc, tramvia (TRAM), línies urbanes de ferrocarril (FGC) i la zona 1 del tren de rodalies (Rodalies de Catalunya, accés a l’aeroport del Prat). Tants viatges com necessitis!", preu: '20.50€'},
      '4Dies': {nomTarifa: '4Dies', tipusTarifa: 'AbonamentsPerDies', descripcio: "Amb la teva Hola BCN! podràs fer viatges il·limitats per Barcelona i l'àrea metropolitana en transport públic: metro, autobús (TMB), funicular de Montjuïc, tramvia (TRAM), línies urbanes de ferrocarril (FGC) i la zona 1 del tren de rodalies (Rodalies de Catalunya, accés a l’aeroport del Prat). Tants viatges com necessitis!", preu: '26.50€'},
      '5Dies': {nomTarifa: '5Dies', tipusTarifa: 'AbonamentsPerDies', descripcio: "Amb la teva Hola BCN! podràs fer viatges il·limitats per Barcelona i l'àrea metropolitana en transport públic: metro, autobús (TMB), funicular de Montjuïc, tramvia (TRAM), línies urbanes de ferrocarril (FGC) i la zona 1 del tren de rodalies (Rodalies de Catalunya, accés a l’aeroport del Prat). Tants viatges com necessitis!", preu: '32€'},
      TelefèricDeMontjuïc: {nomTarifa: 'TelefèricDeMontjuïc', tipusTarifa: 'Turisme', descripcio: 'Fes la teva reserva online, imprimeix-la i mostra-la a les taquilles de qualsevol de les estacions del telefèric per canviar-la pels bitllets.', preu: '10.35€'}
    },
    Castella: {
      'BilleteSenzillo': {nomTarifa: 'BilleteSenzillo', tipusTarifa: 'BilletesSenzillos', descripcio: 'Título de TMB válido para realizar un viaje en metro, en bus o en el funicular de Montjuïc. Es un título unipersonal no integrado.', preu: '2.15€'},
      'T-10': {nomTarifa: 'T-10', tipusTarifa: 'AbonosIntegrados', descripcio: 'Título multipersonal válido para realizar 10 desplazamientos integrados de 1 a 6 zonas, con el que se dispone, en el caso del título de una zona, de 75 minutos entre la primera y la última validación. El plazo se incrementa 15 minutos por cada zona.',
        preu: '9.95€'},
      'T-Mes': {nomTarifa: 'T-Mes', tipusTarifa: 'AbonosIntegrados', descripcio: 'Título personal e intransferible válido para realizar un número ilimitado de viajes durante 30 días consecutivos desde la primera validación. Debe ir acompañado del DNI o de carnés acreditativos de los operadores. El número del documento que sirva como acreditación debe figurar impreso en el título.',
        preu: '52.75€'},
      'T-Jove': {nomTarifa: 'T-Jove', tipusTarifa: 'AbonosIntegrados', descripcio: 'Título personalizado válido para realizar un número ilimitado de viajes durante 90 días consecutivos desde la primera cancelación para menores de 25 años que lo acrediten con un carné especial y personalizado, mediante DNI, NIE o pasaporte. El número del DNI, NIE o pasaporte que sirva como acreditación debe figurar impreso en el título.',
        preu: '105€'},
      'T-Dia': {nomTarifa: 'T-Dia', tipusTarifa: 'AbonosIntegrados', descripcio: 'Desplazamientos ilimitados en las zonas delimitadas por la primera validación, en todos los medios de transporte según las zonas que se quieren atravesar (de 1 a 6 zonas). Validez: 1 día desde la primera validación y hasta la finalización del servicio. Título unipersonal.',
        preu: '7.60€'},
      'T-50/30': {nomTarifa: 'T-50/30', tipusTarifa: 'AbonosIntegrados', descripcio: 'Título unipersonal válido para realizar 50 desplazamientos integrados en 30 días consecutivos a partir de la primera validación, con el que se dispone, en el caso del título de una zona, de 75 minutos entre la primera y la última validación. El plazo se incrementa 15 minutos por cada zona.',
        preu: '42.50€'},
      'T-Trimestre': {nomTarifa: 'T-Trimestre', tipusTarifa: 'AbonosIntegrados', descripcio: 'Título personalizado e intransferible válido para realizar un número ilimitado de viajes durante 90 días consecutivos desde la primera cancelación. Debe ir acompañado del DNI o de carnés acreditativos de los operadores. El número del documento que sirva como acreditación debe figurar impreso en el título.',
        preu: '142€'},
      'T-70/30': {nomTarifa: 'T-70/30', tipusTarifa: 'AbonosIntegrados', descripcio: 'Título multipersonal válido para realizar 70 viajes en 30 días consecutivos desde la primera cancelación, con el que se dispone, en el caso del título de una zona, de 75 minutos entre la primera y la última validación. El plazo se incrementa 15 minutos por cada zona.',
        preu: '59.50€'},
      'T-4': {nomTarifa: 'T-4', tipusTarifa: 'AbonosEspeciales', descripcio: 'Título unipersonal válido para realizar 10 desplazamientos integrados en la red de autobuses y metro de TMB (excepto los servicios especiales y el Barcelona Bus Turístic), la red de autobús del Área Metropolitana de Barcelona (AMB), Ferrocarrils de la Generalitat de Catalunya (FGC) y Tram (únicamente zona 1).', preu: '3.90€'},
      'T-MesFM/FNgeneral': {nomTarifa: 'T-MesFM/FNgeneral', tipusTarifa: 'AbonosEspeciales', descripcio: 'Título personal e intransferible válido para realizar un número ilimitado de viajes durante 30 días para miembros de familias monoparentales y familias numerosas de categoría general. Debe ir acompañado del DNI y del carné de familia numerosa Obre la pàgina en una finestra nova o de la acreditación de familia monoparental Abre la página en una ventana nueva, de Cataluña o del resto del Estado.',
        preu: '42.20€'},
      'T-FM/FN70/90general': {nomTarifa: 'T-FM/FN70/90general', tipusTarifa: 'AbonosEspeciales', descripcio: 'Abono multipersonal de 90 días para miembros de familias monoparentales y familias numerosas de categoría general que permite realizar 70 desplazamientos. Debe ir acompañado del DNI y del carné de familia numerosa Abre la página en una ventana nueva o de la acreditación de familia monoparental Abre la página en una ventana nueva. Es un título horario, con el que se dispone de 1 hora y 15 minutos para realizar un desplazamiento en el caso del título de una zona. El plazo se incrementa 15 minutos por cada zona adicional.',
        preu: '55.70€'},
      'T-TrimestreFM/FNgeneral': {nomTarifa: 'T-TrimestreFM/FNgeneral', tipusTarifa: 'AbonosEspeciales', descripcio: 'Abono personal de 90 días para miembros de familias monoparentales y familias numerosas de categoría general. Debe ir acompañado del DNI y del carné de familia numerosa Abre la página en una ventana nueva o de la acreditación de familia monoparental, de Cataluña o del resto del Estado.',
        preu: '113.60€'},
      'T-JoveFM/FNgeneral': {nomTarifa: 'T-JoveFM/FNgeneral', tipusTarifa: 'AbonosEspeciales', descripcio: 'Abono personal de 90 días para jóvenes menores de 25 años que sean miembros de familias monoparentales o familias numerosas de categoría general. Debe ir acompañado del DNI y del carné de familia numerosa Abre la página en una ventana nueva, individual o familiar, o de la acreditación de familia monoparental Abre la página en una ventana nueva, de Cataluña o del resto del Estado.',
        preu: '84€'},
      'T-MesFM/FNespecial': {nomTarifa: 'T-MesFM/FNespecial', tipusTarifa: 'AbonosEspeciales', descripcio: 'Título personal e intransferible válido para realizar un número ilimitado de viajes durante 30 días para miembros de familias monoparentales y familias numerosas de categoría especial. Debe ir acompañado del DNI y del carné de familia numerosa Abre la página en una ventana nueva o de la acreditación de familia monoparental Abre la página en una ventana nueva, individual o familiar, de Cataluña o del resto del Estado.',
        preu: '26.40€'},
      'T-FM/FN70/90especial': {nomTarifa: 'T-FM/FN70/90especial', tipusTarifa: 'AbonosEspeciales', descripcio: 'Abono multipersonal de 90 días para miembros de familias monoparentales y familias numerosas de categoría especial, que permite efectuar 70 desplazamientos. Debe ir acompañado del DNI y del carné de familia numerosa especial Abre la página en una ventana nueva o de la acreditación de familia monoparental Abre la página en una ventana nueva. Es un título horario, con el que se dispone de 1 hora y 15 minutos para realizar un desplazamiento en el caso del título de una zona. El plazo se incrementa 15 minutos por cada zona adicional.',
        preu: '34.80€'},
      'T-TrimestreFM/FNespecial': {nomTarifa: 'T-TrimestreFM/FNespecial', tipusTarifa: 'AbonosEspeciales', descripcio: 'Abono personal de 90 días para miembros de familias monoparentales y familias numerosas de categoría especial. Debe ir acompañado del DNI y del carné de familia numerosa Abre la página en una ventana nueva o de la acreditación de familia monoparental Abre la página en una ventana nueva, individual o familiar, de Cataluña o del resto del Estado.',
        preu: '71€'},
      'T-JoveFM/FNespecial': {nomTarifa: 'T-JoveFM/FNespecial', tipusTarifa: 'AbonosEspeciales', descripcio: 'Abono personal de 90 días para jóvenes menores de 25 años que sean miembros de familias monoparentales y familias numerosas de categoría especial. Debe ir acompañado del DNI y del carné de familia numerosa Abre la página en una ventana nueva o de la acreditación de familia monoparental Abre la página en una ventana nueva, individual o familiar, de Cataluña o del resto del Estado.',
        preu: '52.50€'},
      '2Dias': {nomTarifa: '2Dias', tipusTarifa: 'AbonosPorDias', descripcio: 'Con tu Hola BCN! podrás hacer viajes ilimitados por Barcelona y su área metropolitana en transporte público: metro, autobús (TMB), tranvía (TRAM), líneas urbanas de ferrocarril (FGC) y la zona 1 del tren de cercanías (Rodalies de Catalunya, acceso al aeropuerto de El Prat). ¡Tantos viajes como necesites!', preu: '14€'},
      '3Dias': {nomTarifa: '3Dias', tipusTarifa: 'AbonosPorDias', descripcio: 'Con tu Hola BCN! podrás hacer viajes ilimitados por Barcelona y su área metropolitana en transporte público: metro, autobús (TMB), tranvía (TRAM), líneas urbanas de ferrocarril (FGC) y la zona 1 del tren de cercanías (Rodalies de Catalunya, acceso al aeropuerto de El Prat). ¡Tantos viajes como necesites!', preu: '20.50€'},
      '4Dias': {nomTarifa: '4Dias', tipusTarifa: 'AbonosPorDias', descripcio: 'Con tu Hola BCN! podrás hacer viajes ilimitados por Barcelona y su área metropolitana en transporte público: metro, autobús (TMB), tranvía (TRAM), líneas urbanas de ferrocarril (FGC) y la zona 1 del tren de cercanías (Rodalies de Catalunya, acceso al aeropuerto de El Prat). ¡Tantos viajes como necesites!', preu: '26.50€'},
      '5Dias': {nomTarifa: '5Dias', tipusTarifa: 'AbonosPorDias', descripcio: 'Con tu Hola BCN! podrás hacer viajes ilimitados por Barcelona y su área metropolitana en transporte público: metro, autobús (TMB), tranvía (TRAM), líneas urbanas de ferrocarril (FGC) y la zona 1 del tren de cercanías (Rodalies de Catalunya, acceso al aeropuerto de El Prat). ¡Tantos viajes como necesites!', preu: '32€'},
      TeleféricoDeMontjuïc: {nomTarifa: 'TeleféricoDeMontjuïc', tipusTarifa: 'Turismo', descripcio: 'Haz tu reserva online, imprímela y muéstrala en las taquillas de cualquiera de las estaciones del teleférico para canjearla por los billetes.', preu: '10.35€'}
    },
    Angles:{
      'SingleTicket': {nomTarifa: 'SingleTicket', tipusTarifa: 'SingleTickets', descripcio: 'A ticket valid for a single journey on a TMB bus, metro or the Montjuïc funicular. This is an individual non-integrated ticket.', preu: '2.15€'},
      'T-10': {nomTarifa: 'T-10', tipusTarifa: 'IntegratedTravelCards', descripcio: 'A multi-person travel card valid for 10 intermodal journeys from 1 to 6 zones. In the case of one-zone cards, passengers have 75 minutes between the first and last validation when changing lines or mode of transport. This time increases by 15 minutes for each zone.',
        preu: '9.95€'},
      'T-Mes': {nomTarifa: 'T-Mes', tipusTarifa: 'IntegratedTravelCards', descripcio: 'An individual non-transferable travel card valid for an unlimited number of journeys in 30 consecutive days from the first validation. T-Mes cards must be used in conjunction with a valid ID—national ID document or any ID issued by integrated fare system operators. The number of the ID document used must be printed on the travel card.',
        preu: '52.75€'},
      'T-Jove': {nomTarifa: 'T-Jove', tipusTarifa: 'IntegratedTravelCards', descripcio: 'A personalised travel card valid for an unlimited number of journeys in 90 consecutive days from the first validation for under 25s providing proof of age by means of a valid national ID document, foreigner ID document (NIE) or passport. The number of the ID document must be printed on the travel card.',
        preu: '105€'},
      'T-Dia': {nomTarifa: 'T-Dia', tipusTarifa: 'IntegratedTravelCards', descripcio: 'An unlimited number of journeys in the zones dlimited by the first validation, on all modes of transport according to the zones to be crossed (1 to 6 zones). Validity: 1 day from first validation to end of service. Individual travel card.',
        preu: '7.60€'},
      'T-50/30': {nomTarifa: 'T-50/30', tipusTarifa: 'IntegratedTravelCards', descripcio: 'An individual travel card valid for 50 intermodal journeys in 30 consecutive days from the first validation. In the case of one-zone cards, passengers have 75 minutes between the first and last validation when changing lines or mode of transport. This time increases by 15 minutes for each zone.',
        preu: '42.50€'},
      'T-Trimestre': {nomTarifa: 'T-Trimestre', tipusTarifa: 'IntegratedTravelCards', descripcio: 'An individual non-transferable travel card valid for an unlimited number of journeys in 90 consecutive days from the first validation. T-Trimestre cards must be usd in conjunction with a valid ID—national ID document or any ID issued by integrated fare system operators. The number of the ID document used must be printed on the travel card.',
        preu: '142€'},
      'T-70/30': {nomTarifa: 'T-70/30', tipusTarifa: 'IntegratedTravelCards', descripcio: 'A multi-person travel card valid for 70 journeys in 30 consecutive days from the first validation. In the case of one-zone cards, passengers have 75 minutes between the first and last validation when changing lines or mode of transport. This time increases by 15 minutes for each zone.',
        preu: '59.50€'},
      'T-4': {nomTarifa: 'T-4', tipusTarifa: 'SpecialDiscountTravelCards', descripcio: 'Individual travel card valid for 10 intermodal journeys on the TMB bus and metro network (except special services and the Barcelona Bus Turístic), the  Barcelona Metropolitan Area (AMB) bus network, Ferrocarrils de la Generalitat de Catalunya (FGC) and Tram (zone 1 only).', preu: '3.90€'},
      'T-MesFM/FNgeneral': {nomTarifa: 'T-MesFM/FNgeneral', tipusTarifa: 'SpecialDiscountTravelCards', descripcio: 'An individual non-transferable travel card valid for an unlimited number of journeys in 30 consecutive for members of general-type single-parent and large families. Cardholders must provide valid ID—national ID document and large family card or single-parent family card issued in Catalonia or the rest of Spain.',
        preu: '42.20€'},
      'T-FM/FN70/90general': {nomTarifa: 'T-FM/FN70/90general', tipusTarifa: 'SpecialDiscountTravelCards', descripcio: 'A multi-person 90-day travel card for members of general-type single-parent and large families valid for 70 journeys. It must be used in conjunction with a valid ID–national ID document and large family card Opens in new window or single-parent family card Opens in new window. In the case of one-zone cards, passengers have 1 hour and 15 minutes between the first and last validation when changing lines of mode of transport. This time increases by 15 minutes for each additional zone.',
        preu: '55.70€'},
      'T-TrimestreFM/FNgeneral': {nomTarifa: 'T-TrimestreFM/FNgeneral', tipusTarifa: 'SpecialDiscountTravelCards', descripcio: 'Personal 90-day travel card for members of general-type single-parent and large families. Cardholders must provide a valid ID–national ID document and large family card Opens in new window or single-parent family card issued in Catalonia or the rest of Spain.',
        preu: '113.60€'},
      'T-JoveFM/FNgeneral': {nomTarifa: 'T-JoveFM/FNgeneral', tipusTarifa: 'SpecialDiscountTravelCards', descripcio: "Personalised 90 day travel card for under 25s who are members of general-type single-parent or large families. Cardholders must provide a valid ID–national ID document and large family card Opens in new window or single-parent family card Opens in new window issued in Catalonia or the rest of Spain.",
        preu: '84€'},
      'T-MesFM/FNespecial': {nomTarifa: 'T-MesFM/FNespecial', tipusTarifa: 'SpecialDiscountTravelCards', descripcio: 'An individual non-transferable travel card valid for an unlimited number of journeys in 30 consecutivefor members of special-type single-parent and large families. Cardholders must provide a valid ID–national ID document and large family card Opens in new window or single-parent family card Opens in new window issued in Catalonia or the rest of Spain..',
        preu: '26.40€'},
      'T-FM/FN70/90especial': {nomTarifa: 'T-FM/FN70/90especial', tipusTarifa: 'SpecialDiscountTravelCards', descripcio: 'A multi-person 90-day travel card for members of special-type single-parent and large families, valid for 70 journeys. It must be used in conjunction with a valid ID–national ID document and large family card Opens in new window or single-parent family card Opens in new window. In the case of one-zone cards, passengers have 1 hour and 15 minutes between the first and last validation when changing lines or mode of transport. This time increases by 15 minutes for each additional zone.',
        preu: '34.80€'},
      'T-TrimestreFM/FNespecial': {nomTarifa: 'T-TrimestreFM/FNespecial', tipusTarifa: 'SpecialDiscountTravelCards', descripcio: 'Personal 90-day travel card for special-type single-parent and large families. Cardholders must provide a valid ID–national ID document and large family card Opens in new window or single-parent family card Opens in new window issued in Catalonia or the rest of Spain.',
        preu: '71€'},
      'T-JoveFM/FNespecial': {nomTarifa: 'T-JoveFM/FNespecial', tipusTarifa: 'SpecialDiscountTravelCards', descripcio: 'Personal 90-day travel card for under 25s who are members of special-type single-parent or large families. Cardholders must provide a valid ID–national ID document and large family card Opens in new window or single-parent family card Opens in new window issued in Catalonia or the rest of Spain.',
        preu: '52.50€'},
      '2Day': {nomTarifa: '2Day', tipusTarifa: 'Multi-DayTravelCards', descripcio: 'With your Hola BCN! travel card, you can make unlimited journeys all over Barcelona and the metropolitan area on public transport: metro, bus (TMB), tram (TRAM), urban railway (FGC) and zone-one regional rail (Rodalies de Catalunya, incl. El Prat airport). As many journeys as you need!', preu: '14€'},
      '3Day': {nomTarifa: '3Day', tipusTarifa: 'Multi-DayTravelCards', descripcio: 'With your Hola BCN! travel card, you can make unlimited journeys all over Barcelona and the metropolitan area on public transport: metro, bus (TMB), tram (TRAM), urban railway (FGC) and zone-one regional rail (Rodalies de Catalunya, incl. El Prat airport). As many journeys as you need!', preu: '20.50€'},
      '4Day': {nomTarifa: '4Day', tipusTarifa: 'Multi-DayTravelCards', descripcio: 'With your Hola BCN! travel card, you can make unlimited journeys all over Barcelona and the metropolitan area on public transport: metro, bus (TMB), tram (TRAM), urban railway (FGC) and zone-one regional rail (Rodalies de Catalunya, incl. El Prat airport). As many journeys as you need!', preu: '26.50€'},
      '5Day': {nomTarifa: '5Day', tipusTarifa: 'Multi-DayTravelCards', descripcio: 'With your Hola BCN! travel card, you can make unlimited journeys all over Barcelona and the metropolitan area on public transport: metro, bus (TMB), tram (TRAM), urban railway (FGC) and zone-one regional rail (Rodalies de Catalunya, incl. El Prat airport). As many journeys as you need!', preu: '32€'},
      TelefèricDeMontjuïc: {nomTarifa: 'TelefèricDeMontjuïc', tipusTarifa: 'Tourism', descripcio: 'Book online, print out your reservation and present it at the ticket office of any of the Teléferic stations to exchange for your tickets.', preu: '10.35€'}
    }
  }
}
