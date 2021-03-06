const jsonData_rel = "v20200525";

const jsonData = [
  { verb: 'amar (ind)', s1: 'amo', s2: 'amas', s3: 'ama', p1: 'amamos', p2: 'amáis', p3: 'aman' },
  { verb: 'andar (ind)', s1: 'ando', s2: 'andas', s3: 'anda', p1: 'andamos', p2: 'andáis', p3: 'andan' },
  { verb: 'ayudar (ind)', s1: 'ayudo', s2: 'ayudas', s3: 'ayuda', p1: 'ayudamos', p2: 'ayudáis', p3: 'ayudan' },
  { verb: 'bailar (ind)', s1: 'bailo', s2: 'bailas', s3: 'baila', p1: 'bailamos', p2: 'bailáis', p3: 'bailan' },
  { verb: 'bajar (ind)', s1: 'bajo', s2: 'bajas', s3: 'baja', p1: 'bajamos', p2: 'bajáis', p3: 'bajan' },
  { verb: 'borrar (ind)', s1: 'borro', s2: 'borras', s3: 'borra', p1: 'borramos', p2: 'borráis', p3: 'borran' },
  { verb: 'buscar (ind)', s1: 'busco', s2: 'buscas', s3: 'busca', p1: 'buscamos', p2: 'buscáis', p3: 'buscan' },
  { verb: 'caminar (ind)', s1: 'camino', s2: 'caminas', s3: 'camina', p1: 'caminamos', p2: 'camináis', p3: 'caminan' },
  { verb: 'cantar (ind)', s1: 'canto', s2: 'cantas', s3: 'canta', p1: 'cantamos', p2: 'cantáis', p3: 'cantan' },
  { verb: 'cenar (ind)', s1: 'ceno', s2: 'cenas', s3: 'cena', p1: 'cenamos', p2: 'cenáis', p3: 'cenan' },
  { verb: 'cocinar (ind)', s1: 'cocino', s2: 'cocinas', s3: 'cocina', p1: 'cocinamos', p2: 'cocináis', p3: 'cocinan' },
  { verb: 'comprar (ind)', s1: 'compro', s2: 'compras', s3: 'compra', p1: 'compramos', p2: 'compráis', p3: 'compran' },
  { verb: 'crear (ind)', s1: 'creo', s2: 'creas', s3: 'crea', p1: 'creamos', p2: 'creáis', p3: 'crean' },
  { verb: 'cuidar (ind)', s1: 'cuido', s2: 'cuidas', s3: 'cuida', p1: 'cuidamos', p2: 'cuidáis', p3: 'cuidan' },
  { verb: 'dejar (ind)', s1: 'dejo', s2: 'dejas', s3: 'deja', p1: 'dejamos', p2: 'dejáis', p3: 'dejan' },
  { verb: 'deletrear (ind)', s1: 'deletreo', s2: 'deletreas', s3: 'deletrea', p1: 'deletreamos', p2: 'deletreáis', p3: 'deletrean' },
  { verb: 'desayunar (ind)', s1: 'desayuno', s2: 'desayunas', s3: 'desayuna', p1: 'desayunamos', p2: 'desayunáis', p3: 'desayunan' },
  { verb: 'descansar (ind)', s1: 'descanso', s2: 'descansas', s3: 'descansa', p1: 'descansamos', p2: 'descansáis', p3: 'descansan' },
  { verb: 'dibujar (ind)', s1: 'dibujo', s2: 'dibujas', s3: 'dibuja', p1: 'dibujamos', p2: 'dibujáis', p3: 'dibujan' },
  { verb: 'diseñar (ind)', s1: 'diseño', s2: 'diseñas', s3: 'diseña', p1: 'diseñamos', p2: 'diseñáis', p3: 'diseñan' },
  { verb: 'entrar (ind)', s1: 'entro', s2: 'entras', s3: 'entra', p1: 'entramos', p2: 'entráis', p3: 'entran' },
  { verb: 'entregar (ind)', s1: 'entrego', s2: 'entregas', s3: 'entrega', p1: 'entregamos', p2: 'entregáis', p3: 'entregan' },
  { verb: 'escuchar (ind)', s1: 'escucho', s2: 'escuchas', s3: 'escucha', p1: 'escuchamos', p2: 'escucháis', p3: 'escuchan' },
  { verb: 'esperar (ind)', s1: 'espero', s2: 'esperas', s3: 'espera', p1: 'esperamos', p2: 'esperáis', p3: 'esperan' },
  { verb: 'esquiar (ind)', s1: 'esquío', s2: 'esquías', s3: 'esquía', p1: 'esquiamos', p2: 'esquiáis', p3: 'esquían' },
  { verb: 'estudiar (ind)', s1: 'estudio', s2: 'estudias', s3: 'estudia', p1: 'estudiamos', p2: 'estudiáis', p3: 'estudian' },
  { verb: 'ganar (ind)', s1: 'gano', s2: 'ganas', s3: 'gana', p1: 'ganamos', p2: 'ganáis', p3: 'ganan' },
  { verb: 'gritar (ind)', s1: 'grito', s2: 'gritas', s3: 'grita', p1: 'gritamos', p2: 'gritáis', p3: 'gritan' },
  { verb: 'hablar (ind)', s1: 'hablo', s2: 'hablas', s3: 'habla', p1: 'hablamos', p2: 'habláis', p3: 'hablan' },
  { verb: 'imaginar (ind)', s1: 'imagino', s2: 'imaginas', s3: 'imagina', p1: 'imaginamos', p2: 'imagináis', p3: 'imaginan' },
  { verb: 'lavar (ind)', s1: 'lavo', s2: 'lavas', s3: 'lava', p1: 'lavamos', p2: 'laváis', p3: 'lavan' },
  { verb: 'limpiar (ind)', s1: 'limpio', s2: 'limpias', s3: 'limpia', p1: 'limpiamos', p2: 'limpiáis', p3: 'limpian' },
  { verb: 'llamar (ind)', s1: 'llamo', s2: 'llamas', s3: 'llama', p1: 'llamamos', p2: 'llamáis', p3: 'llaman' },
  { verb: 'llegar (ind)', s1: 'llego', s2: 'llegas', s3: 'llega', p1: 'llegamos', p2: 'llegáis', p3: 'llegan' },
  { verb: 'llevar (ind)', s1: 'llevo', s2: 'llevas', s3: 'lleva', p1: 'llevamos', p2: 'lleváis', p3: 'llevan' },
  { verb: 'llorar (ind)', s1: 'lloro', s2: 'lloras', s3: 'llora', p1: 'lloramos', p2: 'lloráis', p3: 'lloran' },
  { verb: 'mirar (ind)', s1: 'miro', s2: 'miras', s3: 'mira', p1: 'miramos', p2: 'miráis', p3: 'miran' },
  { verb: 'molestar (ind)', s1: 'molesto', s2: 'molestas', s3: 'molesta', p1: 'molestamos', p2: 'molestáis', p3: 'molestan' },
  { verb: 'nadar (ind)', s1: 'nado', s2: 'nadas', s3: 'nada', p1: 'nadamos', p2: 'nadáis', p3: 'nadan' },
  { verb: 'odiar (ind)', s1: 'odio', s2: 'odias', s3: 'odia', p1: 'odiamos', p2: 'odiáis', p3: 'odian' },
  { verb: 'olvidar (ind)', s1: 'olvido', s2: 'olvidas', s3: 'olvida', p1: 'olvidamos', p2: 'olvidáis', p3: 'olvidan' },
  { verb: 'pagar (ind)', s1: 'pago', s2: 'pagas', s3: 'paga', p1: 'pagamos', p2: 'pagáis', p3: 'pagan' },
  { verb: 'pelear (ind)', s1: 'peleo', s2: 'peleas', s3: 'pelea', p1: 'peleamos', p2: 'peleáis', p3: 'pelean' },
  { verb: 'pintar (ind)', s1: 'pinto', s2: 'pintas', s3: 'pinta', p1: 'pintamos', p2: 'pintáis', p3: 'pintan' },
  { verb: 'planchar (ind)', s1: 'plancho', s2: 'planchas', s3: 'plancha', p1: 'planchamos', p2: 'plancháis', p3: 'planchan' },
  { verb: 'preguntar (ind)', s1: 'pregunto', s2: 'preguntas', s3: 'pregunta', p1: 'preguntamos', p2: 'preguntáis', p3: 'preguntan' },
  { verb: 'quedar (ind)', s1: 'quedo', s2: 'quedas', s3: 'queda', p1: 'quedamos', p2: 'quedáis', p3: 'quedan' },
  { verb: 'regalar (ind)', s1: 'regalo', s2: 'regalas', s3: 'regala', p1: 'regalamos', p2: 'regaláis', p3: 'regalan' },
  { verb: 'saltar (ind)', s1: 'salto', s2: 'saltas', s3: 'salta', p1: 'saltamos', p2: 'saltáis', p3: 'saltan' },
  { verb: 'salvar (ind)', s1: 'salvo', s2: 'salvas', s3: 'salva', p1: 'salvamos', p2: 'salváis', p3: 'salvan' },
  { verb: 'telefonear (ind)', s1: 'telefoneo', s2: 'telefoneas', s3: 'telefonea', p1: 'telefoneamos', p2: 'telefoneáis', p3: 'telefonean' },
  { verb: 'tomar (ind)', s1: 'tomo', s2: 'tomas', s3: 'toma', p1: 'tomamos', p2: 'tomáis', p3: 'toman' },
  { verb: 'trabajar (ind)', s1: 'trabajo', s2: 'trabajas', s3: 'trabaja', p1: 'trabajamos', p2: 'trabajáis', p3: 'trabajan' },
  { verb: 'aprender (ind)', s1: 'aprendo', s2: 'aprendes', s3: 'aprende', p1: 'aprendemos', p2: 'aprendéis', p3: 'aprenden' },
  { verb: 'beber (ind)', s1: 'bebo', s2: 'bebes', s3: 'bebe', p1: 'bebemos', p2: 'bebéis', p3: 'beben' },
  { verb: 'coger (ind)', s1: 'cojo', s2: 'coges', s3: 'coge', p1: 'cogemos', p2: 'cogéis', p3: 'cogen' },
  { verb: 'comer (ind)', s1: 'como', s2: 'comes', s3: 'come', p1: 'comemos', p2: 'coméis', p3: 'comen' },
  { verb: 'comprender (ind)', s1: 'comprendo', s2: 'comprendes', s3: 'comprende', p1: 'comprendemos', p2: 'comprendéis', p3: 'comprenden' },
  { verb: 'correr (ind)', s1: 'corro', s2: 'corres', s3: 'corre', p1: 'corremos', p2: 'corréis', p3: 'corren' },
  { verb: 'coser (ind)', s1: 'coso', s2: 'coses', s3: 'cose', p1: 'cosemos', p2: 'coséis', p3: 'cosen' },
  { verb: 'creer (ind)', s1: 'creo', s2: 'crees', s3: 'cree', p1: 'creemos', p2: 'creéis', p3: 'creen' },
  { verb: 'deber (ind)', s1: 'debo', s2: 'debes', s3: 'debe', p1: 'debemos', p2: 'debéis', p3: 'deben' },
  { verb: 'leer (ind)', s1: 'leo', s2: 'lees', s3: 'lee', p1: 'leemos', p2: 'leéis', p3: 'leen' },
  { verb: 'responder (ind)', s1: 'respondo', s2: 'respondes', s3: 'responde', p1: 'respondemos', p2: 'respondéis', p3: 'responden' },
  { verb: 'temer (ind)', s1: 'temo', s2: 'temes', s3: 'teme', p1: 'tememos', p2: 'teméis', p3: 'temen' },
  { verb: 'aplaudir (ind)', s1: 'aplaudo', s2: 'aplaudes', s3: 'aplaude', p1: 'aplaudimos', p2: 'aplaudís', p3: 'aplauden' },
  { verb: 'compartir (ind)', s1: 'comparto', s2: 'compartes', s3: 'comparte', p1: 'compartimos', p2: 'compartís', p3: 'comparten' },
  { verb: 'descubrir (ind)', s1: 'descubro', s2: 'descubres', s3: 'descubre', p1: 'descubrimos', p2: 'descubrís', p3: 'descubren' },
  { verb: 'escribir (ind)', s1: 'escribo', s2: 'escribes', s3: 'escribe', p1: 'escribimos', p2: 'escribís', p3: 'escriben' },
  { verb: 'sufrir (ind)', s1: 'sufro', s2: 'sufres', s3: 'sufre', p1: 'sufrimos', p2: 'sufrís', p3: 'sufren' },
  { verb: 'subir (ind)', s1: 'subo', s2: 'subes', s3: 'sube', p1: 'subimos', p2: 'subís', p3: 'suben' },
  { verb: 'dividir (ind)', s1: 'divido', s2: 'divides', s3: 'divide', p1: 'dividimos', p2: 'dividís', p3: 'dividen' },
  { verb: 'vivir (ind)', s1: 'vivo', s2: 'vives', s3: 'vive', p1: 'vivimos', p2: 'vivís', p3: 'viven' },
  { verb: 'afeitarse (ind)', s1: 'afeito', s2: 'afeitas', s3: 'afeita', p1: 'afeitamos', p2: 'afeitáis', p3: 'afeitan' },
  { verb: 'apellidarse (ind)', s1: 'apellido', s2: 'apellidas', s3: 'apellida', p1: 'apellidamos', p2: 'apellidáis', p3: 'apellidan' },
  { verb: 'bañarse (ind)', s1: 'baño', s2: 'bañas', s3: 'baña', p1: 'bañamos', p2: 'bañáis', p3: 'bañan' },
  { verb: 'dedicarse (ind)', s1: 'dedico', s2: 'dedicas', s3: 'dedica', p1: 'dedicamos', p2: 'dedicáis', p3: 'dedican' },
  { verb: 'depilarse (ind)', s1: 'depilo', s2: 'depilas', s3: 'depila', p1: 'depilamos', p2: 'depiláis', p3: 'depilan' },
  { verb: 'ducharse (ind)', s1: 'ducho', s2: 'duchas', s3: 'ducha', p1: 'duchamos', p2: 'ducháis', p3: 'duchan' },
  { verb: 'levantarse (ind)', s1: 'levanto', s2: 'levantas', s3: 'levanta', p1: 'levantamos', p2: 'levantáis', p3: 'levantan' },
  { verb: 'llamarse (ind)', s1: 'llamo', s2: 'llamas', s3: 'llama', p1: 'llamamos', p2: 'llamáis', p3: 'llaman' },
  { verb: 'maquillarse (ind)', s1: 'maquillo', s2: 'maquillas', s3: 'maquilla', p1: 'maquillamos', p2: 'maquilláis', p3: 'maquillan' },
  { verb: 'peinarse (ind)', s1: 'peino', s2: 'peinas', s3: 'peina', p1: 'peinamos', p2: 'peináis', p3: 'peinan' },
  { verb: 'quedarse (ind)', s1: 'quedo', s2: 'quedas', s3: 'queda', p1: 'quedamos', p2: 'quedáis', p3: 'quedan' },
  { verb: 'secarse (ind)', s1: 'seco', s2: 'secas', s3: 'seca', p1: 'secamos', p2: 'secáis', p3: 'secan' },
  { verb: 'tener (ind)', s1: 'tengo', s2: 'tienes', s3: 'tiene', p1: 'tenemos', p2: 'tenéis', p3: 'tienen' },
  { verb: 'haber (ind)', s1: 'he', s2: 'has', s3: 'ha', p1: 'hemos', p2: 'habéis', p3: 'han' },
  { verb: 'apretar (ind)', s1: 'aprieto', s2: 'aprietas', s3: 'aprieta', p1: 'apretamos', p2: 'apretáis', p3: 'aprietan' },
  { verb: 'calentar (ind)', s1: 'caliento', s2: 'calientas', s3: 'calienta', p1: 'calentamos', p2: 'calentáis', p3: 'calientan' },
  { verb: 'cerrar (ind)', s1: 'cierro', s2: 'cierras', s3: 'cierra', p1: 'cerramos', p2: 'cerráis', p3: 'cierran' },
  { verb: 'comenzar (ind)', s1: 'comienzo', s2: 'comienzas', s3: 'comienza', p1: 'comenzamos', p2: 'comenzáis', p3: 'comienzan' },
  { verb: 'confesar (ind)', s1: 'confieso', s2: 'confiesas', s3: 'confiesa', p1: 'confesamos', p2: 'confesáis', p3: 'confiesan' },
  { verb: 'despertar (ind)', s1: 'despierto', s2: 'despiertas', s3: 'despierta', p1: 'despertamos', p2: 'despertáis', p3: 'despiertan' },
  { verb: 'empezar (ind)', s1: 'empiezo', s2: 'empiezas', s3: 'empieza', p1: 'empezamos', p2: 'empezáis', p3: 'empiezan' },
  { verb: 'encerrar (ind)', s1: 'encierro', s2: 'encierras', s3: 'encierra', p1: 'encerramos', p2: 'encerráis', p3: 'encierran' },
  { verb: 'fregar (ind)', s1: 'friego', s2: 'friegas', s3: 'friega', p1: 'fregamos', p2: 'fregáis', p3: 'friegan' },
  { verb: 'merendar (ind)', s1: 'meriendo', s2: 'meriendas', s3: 'merienda', p1: 'merendamos', p2: 'merendáis', p3: 'meriendan' },
  { verb: 'negar (ind)', s1: 'niego', s2: 'niegas', s3: 'niega', p1: 'negamos', p2: 'negáis', p3: 'niegan' },
  { verb: 'pensar (ind)', s1: 'pienso', s2: 'piensas', s3: 'piensa', p1: 'pensamos', p2: 'pensáis', p3: 'piensan' },
  { verb: 'recomendar (ind)', s1: 'recomiendo', s2: 'recomiendas', s3: 'recomienda', p1: 'recomendamos', p2: 'recomendáis', p3: 'recomiendan' },
  { verb: 'regar (ind)', s1: 'riego', s2: 'riegas', s3: 'riega', p1: 'regamos', p2: 'regáis', p3: 'riegan' },
  { verb: 'sentar(se) (ind)', s1: 'siento', s2: 'sientas', s3: 'sienta', p1: 'sentamos', p2: 'sentáis', p3: 'sientan' },
  { verb: 'temblar (ind)', s1: 'tiemblo', s2: 'tiemblas', s3: 'tiembla', p1: 'temblamos', p2: 'tembláis', p3: 'tiemblan' },
  { verb: 'atender (ind)', s1: 'atiendo', s2: 'atiendes', s3: 'atiende', p1: 'atendemos', p2: 'atendéis', p3: 'atienden' },
  { verb: 'defender (ind)', s1: 'defiendo', s2: 'defiendes', s3: 'defiende', p1: 'defendemos', p2: 'defendéis', p3: 'defienden' },
  { verb: 'descender (ind)', s1: 'desciendo', s2: 'desciendes', s3: 'desciende', p1: 'descendemos', p2: 'descendéis', p3: 'descienden' },
  { verb: 'encender (ind)', s1: 'enciendo', s2: 'enciendes', s3: 'enciende', p1: 'encendemos', p2: 'encendéis', p3: 'encienden' },
  { verb: 'entender (ind)', s1: 'entiendo', s2: 'entiendes', s3: 'entiende', p1: 'entendemos', p2: 'entendéis', p3: 'entienden' },
  { verb: 'perder (ind)', s1: 'pierdo', s2: 'pierdes', s3: 'pierde', p1: 'perdemos', p2: 'perdéis', p3: 'pierden' },
  { verb: 'querer (ind)', s1: 'quiero', s2: 'quieres', s3: 'quiere', p1: 'queremos', p2: 'queréis', p3: 'quieren' },
  { verb: 'advertir (ind)', s1: 'advierto', s2: 'adviertes', s3: 'advierte', p1: 'advertimos', p2: 'advertís', p3: 'advierten' },
  { verb: 'divertir (ind)', s1: 'divierto', s2: 'diviertes', s3: 'divierte', p1: 'divertimos', p2: 'divertís', p3: 'divierten' },
  { verb: 'herir (ind)', s1: 'hiero', s2: 'hieres', s3: 'hiere', p1: 'herimos', p2: 'herís', p3: 'hieren' },
  { verb: 'mentir (ind)', s1: 'miento', s2: 'mientes', s3: 'miente', p1: 'mentimos', p2: 'mentís', p3: 'mienten' },
  { verb: 'preferir (ind)', s1: 'prefiero', s2: 'prefieres', s3: 'prefiere', p1: 'preferimos', p2: 'preferís', p3: 'prefieren' },
  { verb: 'sentir (ind)', s1: 'siento', s2: 'sientes', s3: 'siente', p1: 'sentimos', p2: 'sentís', p3: 'sienten' },
  { verb: 'sugerir (ind)', s1: 'sugiero', s2: 'sugieres', s3: 'sugiere', p1: 'sugerimos', p2: 'sugerís', p3: 'sugieren' },
  { verb: 'acostar (ind)', s1: 'acuesto', s2: 'acuestas', s3: 'acuesta', p1: 'acostamos', p2: 'acostáis', p3: 'acuestan' },
  { verb: 'acordar(se) (ind)', s1: 'acuerdo', s2: 'acuerdas', s3: 'acuerda', p1: 'acordamos', p2: 'acordáis', p3: 'acuerdan' },
  { verb: 'recordar (ind)', s1: 'recuerdo', s2: 'recuerdas', s3: 'recuerda', p1: 'recordamos', p2: 'recordáis', p3: 'recuerdan' },
  { verb: 'almorzar (ind)', s1: 'almuerzo', s2: 'almuerzas', s3: 'almuerza', p1: 'almorzamos', p2: 'almorzáis', p3: 'almuerzan' },
  { verb: 'contar (ind)', s1: 'cuento', s2: 'cuentas', s3: 'cuenta', p1: 'contamos', p2: 'contáis', p3: 'cuentan' },
  { verb: 'soñar (ind)', s1: 'sueño', s2: 'sueñas', s3: 'sueña', p1: 'soñamos', p2: 'soñáis', p3: 'sueñan' },
  { verb: 'volar (ind)', s1: 'vuelo', s2: 'vuelas', s3: 'vuela', p1: 'volamos', p2: 'voláis', p3: 'vuelan' },
  { verb: 'encontrar (ind)', s1: 'encuentro', s2: 'encuentras', s3: 'encuentra', p1: 'encontramos', p2: 'encontráis', p3: 'encuentran' },
  { verb: 'probar (ind)', s1: 'pruebo', s2: 'pruebas', s3: 'prueba', p1: 'probamos', p2: 'probáis', p3: 'prueban' },
  { verb: 'costar (ind)', s1: 'cuesto', s2: 'cuestas', s3: 'cuesta', p1: 'costamos', p2: 'costáis', p3: 'cuestan' },
  { verb: 'jugar (ind)', s1: 'juego', s2: 'juegas', s3: 'juega', p1: 'jugamos', p2: 'jugáis', p3: 'juegan' },
  { verb: 'cocer (ind)', s1: 'cuezo', s2: 'cueces', s3: 'cuece', p1: 'cocemos', p2: 'cocéis', p3: 'cuecen' },
  { verb: 'devolver (ind)', s1: 'devuelvo', s2: 'devuelves', s3: 'devuelve', p1: 'devolvemos', p2: 'devolvéis', p3: 'devuelven' },
  { verb: 'oler (ind)', s1: 'huelo', s2: 'hueles', s3: 'huele', p1: 'olemos', p2: 'oléis', p3: 'huelen' },
  { verb: 'morder (ind)', s1: 'muerdo', s2: 'muerdes', s3: 'muerde', p1: 'mordemos', p2: 'mordéis', p3: 'muerden' },
  { verb: 'mover (ind)', s1: 'muevo', s2: 'mueves', s3: 'mueve', p1: 'movemos', p2: 'movéis', p3: 'mueven' },
  { verb: 'poder (ind)', s1: 'puedo', s2: 'puedes', s3: 'puede', p1: 'podemos', p2: 'podéis', p3: 'pueden' },
  { verb: 'soler (ind)', s1: 'suelo', s2: 'sueles', s3: 'suele', p1: 'solemos', p2: 'soléis', p3: 'suelen' },
  { verb: 'volver (ind)', s1: 'vuelvo', s2: 'vuelves', s3: 'vuelve', p1: 'volvemos', p2: 'volvéis', p3: 'vuelven' },
  { verb: 'dormir (ind)', s1: 'duermo', s2: 'duermes', s3: 'duerme', p1: 'dormimos', p2: 'dormís', p3: 'duermen' },
  { verb: 'morir (ind)', s1: 'muero', s2: 'mueres', s3: 'muere', p1: 'morimos', p2: 'morís', p3: 'mueren' },
  { verb: 'pedir (ind)', s1: 'pIdo', s2: 'pIdes', s3: 'pIde', p1: 'pedimos', p2: 'pedís', p3: 'pIden' },
  { verb: 'conseguir (ind)', s1: 'consIgo', s2: 'consIgues', s3: 'consIgue', p1: 'conseguimos', p2: 'conseguís', p3: 'consIguen' },
  { verb: 'seguir (ind)', s1: 'sIgo', s2: 'sIgues', s3: 'sIgue', p1: 'seguimos', p2: 'seguís', p3: 'sIguen' },
  { verb: 'perseguir (ind)', s1: 'persIgo', s2: 'persIgues', s3: 'persIgue', p1: 'perseguimos', p2: 'perseguís', p3: 'persIguen' },
  { verb: 'elegir (ind)', s1: 'elIjo', s2: 'elIges', s3: 'elIge', p1: 'elegimos', p2: 'elegís', p3: 'elIgen' },
  { verb: 'decir (ind)', s1: 'dIgo', s2: 'dIces', s3: 'dIce', p1: 'decimos', p2: 'decís', p3: 'dIcen' },
  { verb: 'vestir(se) (ind)', s1: 'vIsto', s2: 'vIstes', s3: 'vIste', p1: 'vestimos', p2: 'vestís', p3: 'vIsten' },
  { verb: 'medir (ind)', s1: 'mIdo', s2: 'mIdes', s3: 'mIde', p1: 'medimos', p2: 'medís', p3: 'mIden' },
  { verb: 'impedir (ind)', s1: 'impIdo', s2: 'impIdes', s3: 'impIde', p1: 'impedimos', p2: 'impedís', p3: 'impIden' },
  { verb: 'reír (ind)', s1: 'río', s2: 'ríes', s3: 'ríe', p1: 'reímos', p2: 'reís', p3: 'ríen' },
  { verb: 'sonreír (ind)', s1: 'sonrío', s2: 'sonríes', s3: 'sonríe', p1: 'sonreímos', p2: 'sonreís', p3: 'sonríen' },
  { verb: 'repetir (ind)', s1: 'repIto', s2: 'repItes', s3: 'repIte', p1: 'repetimos', p2: 'repetís', p3: 'repIten' },
  { verb: 'servir (ind)', s1: 'sIrvo', s2: 'sIrves', s3: 'sIrve', p1: 'servimos', p2: 'servís', p3: 'sIrven' },
  { verb: 'despedir (ind)', s1: 'despIdo', s2: 'despIdes', s3: 'despIde', p1: 'despedimos', p2: 'despedís', p3: 'despIden' },
  { verb: 'hacer (ind)', s1: 'hago', s2: 'haces', s3: 'hace', p1: 'hacemos', p2: 'hacéis', p3: 'hacen' },
  { verb: 'rehacer (ind)', s1: 'rehago', s2: 'rehaces', s3: 'rehace', p1: 'rehacemos', p2: 'rehacéis', p3: 'rehacen' },
  { verb: 'deshacer (ind)', s1: 'deshago', s2: 'deshaces', s3: 'deshace', p1: 'deshacemos', p2: 'deshacéis', p3: 'deshacen' },
  { verb: 'satisfacer (ind)', s1: 'satisfago', s2: 'satisfaces', s3: 'satisface', p1: 'satisfacemos', p2: 'satisfacéis', p3: 'satisfacen' },
  { verb: 'sostener (ind)', s1: 'sostengo', s2: 'sostienes', s3: 'sostiene', p1: 'sostenemos', p2: 'sostenéis', p3: 'sostienen' },
  { verb: 'obtener (ind)', s1: 'obtengo', s2: 'obtienes', s3: 'obtiene', p1: 'obtenemos', p2: 'obtenéis', p3: 'obtienen' },
  { verb: 'entretener (ind)', s1: 'entretengo', s2: 'entretienes', s3: 'entretiene', p1: 'entretenemos', p2: 'entretenéis', p3: 'entretienen' },
  { verb: 'mantener (ind)', s1: 'mantengo', s2: 'mantienes', s3: 'mantiene', p1: 'mantenemos', p2: 'mantenéis', p3: 'mantienen' },
  { verb: 'detener (ind)', s1: 'detengo', s2: 'detienes', s3: 'detiene', p1: 'detenemos', p2: 'detenéis', p3: 'detienen' },
  { verb: 'suponer (ind)', s1: 'supongo', s2: 'supones', s3: 'supone', p1: 'suponemos', p2: 'suponéis', p3: 'suponen' },
  { verb: 'reponer (ind)', s1: 'repongo', s2: 'repones', s3: 'repone', p1: 'reponemos', p2: 'reponéis', p3: 'reponen' },
  { verb: 'disponer (ind)', s1: 'dispongo', s2: 'dispones', s3: 'dispone', p1: 'disponemos', p2: 'disponéis', p3: 'disponen' },
  { verb: 'exponer (ind)', s1: 'expongo', s2: 'expones', s3: 'expone', p1: 'exponemos', p2: 'exponéis', p3: 'exponen' },
  { verb: 'posponer (ind)', s1: 'pospongo', s2: 'pospones', s3: 'pospone', p1: 'posponemos', p2: 'posponéis', p3: 'posponen' },
  { verb: 'componer (ind)', s1: 'compongo', s2: 'compones', s3: 'compone', p1: 'componemos', p2: 'componéis', p3: 'componen' },
  { verb: 'anteponer (ind)', s1: 'antepongo', s2: 'antepones', s3: 'antepone', p1: 'anteponemos', p2: 'anteponéis', p3: 'anteponen' },
  { verb: 'imponer (ind)', s1: 'impongo', s2: 'impones', s3: 'impone', p1: 'imponemos', p2: 'imponéis', p3: 'imponen' },
  { verb: 'proponer (ind)', s1: 'propongo', s2: 'propones', s3: 'propone', p1: 'proponemos', p2: 'proponéis', p3: 'proponen' },
  { verb: 'oponer (ind)', s1: 'opongo', s2: 'opones', s3: 'opone', p1: 'oponemos', p2: 'oponéis', p3: 'oponen' },
  { verb: 'venir (ind)', s1: 'vengo', s2: 'vienes', s3: 'viene', p1: 'venimos', p2: 'venís', p3: 'vienen' },
  { verb: 'intervenir (ind)', s1: 'intervengo', s2: 'intervienes', s3: 'interviene', p1: 'intervenimos', p2: 'intervenís', p3: 'intervienen' },
  { verb: 'provenir (ind)', s1: 'provengo', s2: 'provienes', s3: 'proviene', p1: 'provenimos', p2: 'provenís', p3: 'provienen' },
  { verb: 'conocer (ind)', s1: 'conozco', s2: 'conoces', s3: 'conoce', p1: 'conocemos', p2: 'conocéis', p3: 'conocen' },
  { verb: 'ofrecer (ind)', s1: 'ofrezco', s2: 'ofreces', s3: 'ofrece', p1: 'ofrecemos', p2: 'ofrecéis', p3: 'ofrecen' },
  { verb: 'parecer(se) (ind)', s1: 'parezco', s2: 'pareces', s3: 'parece', p1: 'parecemos', p2: 'parecéis', p3: 'parecen' },
  { verb: 'reconocer (ind)', s1: 'reconozco', s2: 'reconoces', s3: 'reconoce', p1: 'reconocemos', p2: 'reconocéis', p3: 'reconocen' },
  { verb: 'desconocer (ind)', s1: 'desconozco', s2: 'desconoces', s3: 'desconoce', p1: 'desconocemos', p2: 'desconocéis', p3: 'desconocen' },
  { verb: 'crecer (ind)', s1: 'crezco', s2: 'creces', s3: 'crece', p1: 'crecemos', p2: 'crecéis', p3: 'crecen' },
  { verb: 'conducir (ind)', s1: 'conduzco', s2: 'conduces', s3: 'conduce', p1: 'conducimos', p2: 'conducís', p3: 'conducen' },
  { verb: 'deducir (ind)', s1: 'deduzco', s2: 'deduces', s3: 'deduce', p1: 'deducimos', p2: 'deducís', p3: 'deducen' },
  { verb: 'producir (ind)', s1: 'produzco', s2: 'produces', s3: 'produce', p1: 'producimos', p2: 'producís', p3: 'producen' },
  { verb: 'traducir (ind)', s1: 'traduzco', s2: 'traduces', s3: 'traduce', p1: 'traducimos', p2: 'traducís', p3: 'traducen' },
  { verb: 'caber (ind)', s1: 'quepo', s2: 'cabes', s3: 'cabe', p1: 'cabemos', p2: 'cabéis', p3: 'caben' },
  { verb: 'caer (ind)', s1: 'caigo', s2: 'caes', s3: 'cae', p1: 'caemos', p2: 'caéis', p3: 'caen' },
  { verb: 'dar (ind)', s1: 'doy', s2: 'das', s3: 'da', p1: 'damos', p2: 'dais', p3: 'dan' },
  { verb: 'huir (ind)', s1: 'huyo', s2: 'huyes', s3: 'huye', p1: 'huimos', p2: 'huis', p3: 'huyen' },
  { verb: 'oir (ind)', s1: 'oigo', s2: 'oyes', s3: 'oye', p1: 'oímos', p2: 'ois', p3: 'oyen' },
  { verb: 'saber (ind)', s1: 'se', s2: 'sabes', s3: 'sabe', p1: 'sabemos', p2: 'sabéis', p3: 'saben' },
  { verb: 'destruir (ind)', s1: 'destruyo', s2: 'destruyes', s3: 'destruye', p1: 'destruimos', p2: 'destruís', p3: 'destruyen' },
  { verb: 'construir (ind)', s1: 'construyo', s2: 'construyes', s3: 'construye', p1: 'construimos', p2: 'construís', p3: 'construyen' },
  { verb: 'obstruir (ind)', s1: 'obstruyo', s2: 'obstruyes', s3: 'obstruye', p1: 'obstruimos', p2: 'obstruís', p3: 'obstruyen' },
  { verb: 'instruir (ind)', s1: 'instruyo', s2: 'instruyes', s3: 'instruye', p1: 'instruimos', p2: 'instruís', p3: 'instruyen' },
  { verb: 'salir (ind)', s1: 'salgo', s2: 'sales', s3: 'sale', p1: 'salimos', p2: 'salís', p3: 'salen' },
  { verb: 'preguntar (P.I.)', s1: 'pregunté', s2: 'preguntaste', s3: 'preguntó', p1: 'preguntamos', p2: 'preguntasteis', p3: 'preguntaron' },
  { verb: 'cantar (P.I.)', s1: 'canté', s2: 'cantaste', s3: 'cantó', p1: 'cantamos', p2: 'cantasteis', p3: 'cantaron' },
  { verb: 'pensar (P.I.)', s1: 'pensé', s2: 'pensaste', s3: 'pensó', p1: 'pensamos', p2: 'pensasteis', p3: 'pensaron' },
  { verb: 'desayunar (P.I.)', s1: 'desayuné', s2: 'desayunaste', s3: 'desayunó', p1: 'desayunamos', p2: 'desayunasteis', p3: 'desayunaron' },
  { verb: 'saltar (P.I.)', s1: 'salté', s2: 'saltaste', s3: 'saltó', p1: 'saltamos', p2: 'saltasteis', p3: 'saltaron' },
  { verb: 'olvidar (P.I.)', s1: 'olvidé', s2: 'olvidaste', s3: 'olvidó', p1: 'olvidamos', p2: 'olvidasteis', p3: 'olvidaron' },
  { verb: 'cocinar (P.I.)', s1: 'cociné', s2: 'cocinaste', s3: 'cocinó', p1: 'cocinamos', p2: 'cocinasteis', p3: 'cocinaron' },
  { verb: 'colgar (P.I.)', s1: 'colgué', s2: 'colgaste', s3: 'colgó', p1: 'colgamos', p2: 'colgasteis', p3: 'colgaron' },
  { verb: 'averiguar (P.I.)', s1: 'averigüé', s2: 'averiguaste', s3: 'averiguó', p1: 'averiguamos', p2: 'averiguasteis', p3: 'averiguaron' },
  { verb: 'empezar (P.I.)', s1: 'empecé', s2: 'empezaste', s3: 'empezó', p1: 'empezamos', p2: 'empezasteis', p3: 'empezaron' },
  { verb: 'fabricar (P.I.)', s1: 'fabriqué', s2: 'fabricaste', s3: 'fabricó', p1: 'fabricamos', p2: 'fabricasteis', p3: 'fabricaron' },
  { verb: 'jugar (P.I.)', s1: 'jugué', s2: 'jugaste', s3: 'jugó', p1: 'jugamos', p2: 'jugasteis', p3: 'jugaron' },
  { verb: 'llegar (P.I.)', s1: 'llegué', s2: 'llegaste', s3: 'llegó', p1: 'llegamos', p2: 'llegasteis', p3: 'llegaron' },
  { verb: 'sacar (P.I.)', s1: 'saqué', s2: 'sacaste', s3: 'sacó', p1: 'sacamos', p2: 'sacasteis', p3: 'sacaron' },
  { verb: 'andar (P.I.)', s1: 'anduve', s2: 'anduviste', s3: 'anduvo', p1: 'anduvimos', p2: 'anduvisteis', p3: 'anduvieron' },
  { verb: 'estar (P.I.)', s1: 'estuve', s2: 'estuviste', s3: 'estuvo', p1: 'estuvimos', p2: 'estuvisteis', p3: 'estuvieron' },
  { verb: 'dar (P.I.)', s1: 'di', s2: 'diste', s3: 'dio', p1: 'dimos', p2: 'disteis', p3: 'dieron' },
  { verb: 'agradecer (P.I.)', s1: 'agradecí', s2: 'agradeciste', s3: 'agradeció', p1: 'agradecimos', p2: 'agradecisteis', p3: 'agradecieron' },
  { verb: 'atender (P.I.)', s1: 'atendí', s2: 'atendiste', s3: 'atendió', p1: 'atendimos', p2: 'atendisteis', p3: 'atendieron' },
  { verb: 'conocer (P.I.)', s1: 'conocí', s2: 'conociste', s3: 'conoció', p1: 'conocimos', p2: 'conocisteis', p3: 'conocieron' },
  { verb: 'comer (P.I.)', s1: 'comí', s2: 'comiste', s3: 'comió', p1: 'comimos', p2: 'comisteis', p3: 'comieron' },
  { verb: 'correr (P.I.)', s1: 'corrí', s2: 'corriste', s3: 'corrió', p1: 'corrimos', p2: 'corristeis', p3: 'corrieron' },
  { verb: 'entender (P.I.)', s1: 'entendí', s2: 'entendiste', s3: 'entendió', p1: 'entendimos', p2: 'entendisteis', p3: 'entendieron' },
  { verb: 'abrir (P.I.)', s1: 'abrí', s2: 'abriste', s3: 'abrió', p1: 'abrimos', p2: 'abristeis', p3: 'abrieron' },
  { verb: 'adquirir (P.I.)', s1: 'adquirí', s2: 'adquiriste', s3: 'adquirió', p1: 'adquirimos', p2: 'adquiristeis', p3: 'adquirieron' },
  { verb: 'dirigir (P.I.)', s1: 'dirigí', s2: 'dirigiste', s3: 'dirigió', p1: 'dirigimos', p2: 'dirigisteis', p3: 'dirigieron' },
  { verb: 'escribir (P.I.)', s1: 'escribí', s2: 'escribiste', s3: 'escribió', p1: 'escribimos', p2: 'escribisteis', p3: 'escribieron' },
  { verb: 'reunir (P.I.)', s1: 'reuní', s2: 'reuniste', s3: 'reunió', p1: 'reunimos', p2: 'reunisteis', p3: 'reunieron' },
  { verb: 'prohibir (P.I.)', s1: 'prohibí', s2: 'prohibiste', s3: 'prohibió', p1: 'prohibimos', p2: 'prohibisteis', p3: 'prohibieron' },
  { verb: 'salir (P.I.)', s1: 'salí', s2: 'saliste', s3: 'salió', p1: 'salimos', p2: 'salisteis', p3: 'salieron' },
  { verb: 'huir (P.I.)', s1: 'huí', s2: 'huiste', s3: 'huyó', p1: 'huimos', p2: 'huisteis', p3: 'huyeron' },
  { verb: 'oír (P.I.)', s1: 'oí', s2: 'oíste', s3: 'oyó', p1: 'oímos', p2: 'oísteis', p3: 'oyeron' },
  { verb: 'cantar (imp)', s1: 'cantaba', s2: 'cantabas', s3: 'cantaba', p1: 'cantábamos', p2: 'cantabais', p3: 'cantaban' },
  { verb: 'planchar (imp)', s1: 'planchaba', s2: 'planchabas', s3: 'planchaba', p1: 'planchábamos', p2: 'planchabais', p3: 'planchaban' },
  { verb: 'limpiar (imp)', s1: 'limpiaba', s2: 'limpiabas', s3: 'limpiaba', p1: 'limpiábamos', p2: 'limpiabais', p3: 'limpiaban' },
  { verb: 'preguntar (imp)', s1: 'preguntaba', s2: 'preguntabas', s3: 'preguntaba', p1: 'preguntábamos', p2: 'preguntabais', p3: 'preguntaban' },
  { verb: 'buscar (imp)', s1: 'buscaba', s2: 'buscabas', s3: 'buscaba', p1: 'buscábamos', p2: 'buscabais', p3: 'buscaban' },
  { verb: 'escuchar (imp)', s1: 'escuchaba', s2: 'escuchabas', s3: 'escuchaba', p1: 'escuchábamos', p2: 'escuchabais', p3: 'escuchaban' },
  { verb: 'esperar (imp)', s1: 'esperaba', s2: 'esperabas', s3: 'esperaba', p1: 'esperábamos', p2: 'esperabais', p3: 'esperaban' },
  { verb: 'trabajar (imp)', s1: 'trabajaba', s2: 'trabajabas', s3: 'trabajaba', p1: 'trabajábamos', p2: 'trabajabais', p3: 'trabajaban' },
  { verb: 'caminar (imp)', s1: 'caminaba', s2: 'caminabas', s3: 'caminaba', p1: 'caminábamos', p2: 'caminabais', p3: 'caminaban' },
  { verb: 'saludar (imp)', s1: 'saludaba', s2: 'saludabas', s3: 'saludaba', p1: 'saludábamos', p2: 'saludabais', p3: 'saludaban' },
  { verb: 'estudiar (imp)', s1: 'estudiaba', s2: 'estudiabas', s3: 'estudiaba', p1: 'estudiábamos', p2: 'estudiabais', p3: 'estudiaban' },
  { verb: 'desayunar (imp)', s1: 'desayunaba', s2: 'desayunabas', s3: 'desayunaba', p1: 'desayunábamos', p2: 'desayunabais', p3: 'desayunaban' },
  { verb: 'diseñar (imp)', s1: 'diseñaba', s2: 'diseñabas', s3: 'diseñaba', p1: 'diseñábamos', p2: 'diseñabais', p3: 'diseñaban' },
  { verb: 'comer (imp)', s1: 'comía', s2: 'comías', s3: 'comía', p1: 'comíamos', p2: 'comíais', p3: 'comían' },
  { verb: 'vivir (imp)', s1: 'vivía', s2: 'vivías', s3: 'vivía', p1: 'vivíamos', p2: 'vivíais', p3: 'vivían' },
  { verb: 'ver (imp)', s1: 'veía', s2: 'veías', s3: 'veía', p1: 'veíamos', p2: 'veíais', p3: 'veían' },
  { verb: 'ser (imp)', s1: 'era', s2: 'eras', s3: 'era', p1: 'eramos', p2: 'erais', p3: 'eran' },
  { verb: 'ir (imp)', s1: 'iba', s2: 'ibas', s3: 'iba', p1: 'íbamos', p2: 'ibais', p3: 'iban' },
  { verb: 'servir (P.I.)', s1: 'serví', s2: 'serviste', s3: 'sirvió', p1: 'servimos', p2: 'servisteis', p3: 'sirvieron' },
  { verb: 'seguir (P.I.)', s1: 'seguí', s2: 'seguiste', s3: 'siguió', p1: 'seguimos', p2: 'seguisteis', p3: 'siguieron' },
  { verb: 'conseguir (P.I.)', s1: 'conseguí', s2: 'conseguiste', s3: 'consiguió', p1: 'conseguimos', p2: 'conseguisteis', p3: 'consiguieron' },
  { verb: 'corregir (P.I.)', s1: 'corregí', s2: 'corregiste', s3: 'corrigió', p1: 'corregimos', p2: 'corregisteis', p3: 'corrigieron' },
  { verb: 'despedir (P.I.)', s1: 'despedí', s2: 'despediste', s3: 'despidió', p1: 'despedimos', p2: 'despedisteis', p3: 'despidieron' },
  { verb: 'elegir (P.I.)', s1: 'elegí', s2: 'elegiste', s3: 'eligió', p1: 'elegimos', p2: 'elegisteis', p3: 'eligieron' },
  { verb: 'impedir (P.I.)', s1: 'impedí', s2: 'impediste', s3: 'impidió', p1: 'impedimos', p2: 'impedisteis', p3: 'impidieron' },
  { verb: 'medir (P.I.)', s1: 'medí', s2: 'mediste', s3: 'medió', p1: 'medimos', p2: 'medisteis', p3: 'midieron' },
  { verb: 'perseguir (P.I.)', s1: 'perseguí', s2: 'perseguiste', s3: 'persiguió', p1: 'perseguimos', p2: 'perseguisteis', p3: 'persiguieron' },
  { verb: 'pedir (P.I.)', s1: 'pedí', s2: 'pediste', s3: 'pidió', p1: 'pedimos', p2: 'pedisteis', p3: 'pidieron' },
  { verb: 'sonreír (P.I.)', s1: 'sonreí', s2: 'sonreíste', s3: 'sonrió', p1: 'sonreímos', p2: 'sonreísteis', p3: 'sonrieron' },
  { verb: 'reír (P.I.)', s1: 'reí', s2: 'reíste', s3: 'rió', p1: 'reímos', p2: 'reísteis', p3: 'rieron' },
  { verb: 'repetir (P.I.)', s1: 'repetí', s2: 'repetiste', s3: 'repitió', p1: 'repetimos', p2: 'repetisteis', p3: 'repitieron' },
  { verb: 'seguir (P.I.)', s1: 'seguí', s2: 'seguiste', s3: 'siguió', p1: 'seguimos', p2: 'seguisteis', p3: 'siguieron' },
  { verb: 'vestir(se) (P.I.)', s1: 'vestí', s2: 'vestiste', s3: 'vistió', p1: 'vestimos', p2: 'vestisteis', p3: 'vistieron' },
  { verb: 'mentir (P.I.)', s1: 'mentí', s2: 'mentiste', s3: 'mintió', p1: 'mentimos', p2: 'mentisteis', p3: 'mintieron' },
  { verb: 'sugerir (P.I.)', s1: 'sugerí', s2: 'sugeriste', s3: 'sugirió', p1: 'sugerimos', p2: 'sugeristeis', p3: 'sugirieron' },
  { verb: 'preferir (P.I.)', s1: 'preferí', s2: 'preferiste', s3: 'prefirió', p1: 'preferimos', p2: 'preferisteis', p3: 'prefirieron' },
  { verb: 'sentir (P.I.)', s1: 'sentí', s2: 'sentiste', s3: 'sintió', p1: 'sentimos', p2: 'sentisteis', p3: 'sintieron' },
  { verb: 'advertir (P.I.)', s1: 'advertí', s2: 'advertiste', s3: 'advirtió', p1: 'advertimos', p2: 'advertisteis', p3: 'advirtieron' },
  { verb: 'convertir (P.I.)', s1: 'convertí', s2: 'convertiste', s3: 'convirtió', p1: 'convertimos', p2: 'convertisteis', p3: 'convirtieron' },
  { verb: 'divertir (P.I.)', s1: 'divertí', s2: 'divertiste', s3: 'divirtió', p1: 'divertimos', p2: 'divertisteis', p3: 'divirtieron' },
  { verb: 'hervir (P.I.)', s1: 'herví', s2: 'herviste', s3: 'hirvió', p1: 'hervimos', p2: 'hervisteis', p3: 'hirvieron' },
  { verb: 'herir (P.I.)', s1: 'herí', s2: 'heriste', s3: 'hirió', p1: 'herimos', p2: 'heristeis', p3: 'hirieron' },
  { verb: 'dormir (P.I.)', s1: 'dormí', s2: 'dormiste', s3: 'durmió', p1: 'dormimos', p2: 'dormisteis', p3: 'durmieron' },
  { verb: 'morir (P.I.)', s1: 'morí', s2: 'moriste', s3: 'murió', p1: 'morimos', p2: 'moristeis', p3: 'murieron' },
  { verb: 'traer (P.I.)', s1: 'traje', s2: 'trajiste', s3: 'trajo', p1: 'trajimos', p2: 'trajisteis', p3: 'trajeron' },
  { verb: 'decir (P.I.)', s1: 'dije', s2: 'dijiste', s3: 'dijo', p1: 'dijimos', p2: 'dijisteis', p3: 'dijeron' },
  { verb: 'conducir (P.I.)', s1: 'conduje', s2: 'condujiste', s3: 'condujo', p1: 'condujimos', p2: 'condujisteis', p3: 'condujeron' },
  { verb: 'traducir (P.I.)', s1: 'traduje', s2: 'tradujiste', s3: 'tradujo', p1: 'tradujimos', p2: 'tradujisteis', p3: 'tradujeron' },
  { verb: 'deducir (P.I.)', s1: 'deduje', s2: 'dedujiste', s3: 'dedujo', p1: 'dedujimos', p2: 'dedujisteis', p3: 'dedujeron' },
  { verb: 'inducir (P.I.)', s1: 'induje', s2: 'indujiste', s3: 'indujo', p1: 'indujimos', p2: 'indujisteis', p3: 'indujeron' },
  { verb: 'hacer (P.I.)', s1: 'hice', s2: 'hiciste', s3: 'hizo', p1: 'hicimos', p2: 'hicisteis', p3: 'hicieron' },
  { verb: 'caber (P.I.)', s1: 'cupe', s2: 'cupiste', s3: 'cupo', p1: 'cupimos', p2: 'cupisteis', p3: 'cupieron' },
  { verb: 'poder (P.I.)', s1: 'pude', s2: 'pudiste', s3: 'pudo', p1: 'pudimos', p2: 'pudisteis', p3: 'pudieron' },
  { verb: 'poner (P.I.)', s1: 'puse', s2: 'pusiste', s3: 'puso', p1: 'pusimos', p2: 'pusisteis', p3: 'pusieron' },
  { verb: 'querer (P.I.)', s1: 'quise', s2: 'quisiste', s3: 'quiso', p1: 'quisimos', p2: 'quisisteis', p3: 'quisieron' },
  { verb: 'saber (P.I.)', s1: 'supe', s2: 'supiste', s3: 'supo', p1: 'supimos', p2: 'supisteis', p3: 'supieron' },
  { verb: 'tener (P.I.)', s1: 'tuve', s2: 'tuviste', s3: 'tuvo', p1: 'tuvimos', p2: 'tuvisteis', p3: 'tuvieron' },
  { verb: 'haber (P.I.)', s1: 'hube', s2: 'hubiste', s3: 'hubo', p1: 'hubimos', p2: 'hubisteis', p3: 'hubieron' },
  { verb: 'venir (P.I.)', s1: 'vine', s2: 'viniste', s3: 'vino', p1: 'vinimos', p2: 'vinisteis', p3: 'vinieron' }
];
