// Antaroth's Abyss (Hard)
//
// made by Yuyuko

const SPAWN_CIRCLES = true;

let counter = 0; // count for back attacks
let timer; // reset time
let print = true; // 2 boss Health
let SPAWNING_FIRST_CIRCLE_FLOWERS = [];
let SPAWNING_SECOND_CIRCLE_FLOWERS = [];

const stepone = 2 * Math.PI / 40; // 40 flowers in total if u think the flower is too many ,u can change the num to smaller.
const steptwo = 2 * Math.PI / 72; // 72 flowers in total

// inner flower circle
for (let angle = -Math.PI; angle <= Math.PI; angle += stepone) {
	if (!SPAWN_CIRCLES) continue;
	SPAWNING_FIRST_CIRCLE_FLOWERS.push({
		"type": "spawn",
		"id": 553,
		"sub_delay": 6000,
		"distance": 143,
		"offset": angle
	});
	SPAWNING_SECOND_CIRCLE_FLOWERS.push({
		"type": "spawn",
		"id": 553,
		"sub_delay": 6000,
		"distance": 157,
		"offset": angle
	});
}

// outer flower circle
for (let angle = -Math.PI; angle <= Math.PI; angle += steptwo) {
	if (!SPAWN_CIRCLES) continue;
	SPAWNING_FIRST_CIRCLE_FLOWERS.push({
		"type": "spawn",
		"id": 553,
		"sub_delay": 6000,
		"distance": 293,
		"offset": angle
	});
	SPAWNING_SECOND_CIRCLE_FLOWERS.push({
		"type": "spawn",
		"id": 553,
		"sub_delay": 6000,
		"distance": 307,
		"offset": angle
	});
}

// heart thrust+anticlockwise spin+right swipe+AOEs from out to in
SPAWNING_FIRST_CIRCLE_FLOWERS.push({"type": "text","class_position":"tank","sub_type": "message","message": "right→>out to in","message_RU": "Вправо > наружу + внутрь"});
SPAWNING_FIRST_CIRCLE_FLOWERS.push({"type": "text","class_position":"dps","sub_type": "message","message": "left←>out to in","message_RU": "Влево > наружу + внутрь"});
SPAWNING_FIRST_CIRCLE_FLOWERS.push({"type": "text","class_position":"heal","sub_type": "message","message": "left←>out to in","message_RU": "Влево > наружу + внутрь"});
SPAWNING_SECOND_CIRCLE_FLOWERS.push({"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2500, "distance": 250, "offset": -1.5707, "ownerName": "SAFE SPOT", "message": "SAFE"});
SPAWNING_SECOND_CIRCLE_FLOWERS.push({"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2500, "distance": 250, "offset": -1.5707});
// heart thrust+clockwise spin+left swipe+AOEs from in to out
SPAWNING_SECOND_CIRCLE_FLOWERS.push({"type": "text","class_position":"tank","sub_type": "message","message": "left←>in to out","message_RU": "Влево > внутрь + наружу"});
SPAWNING_SECOND_CIRCLE_FLOWERS.push({"type": "text","class_position":"dps","sub_type": "message","message": "right→>in to out","message_RU": "Вправо > внутрь + наружу"});
SPAWNING_SECOND_CIRCLE_FLOWERS.push({"type": "text","class_position":"heal","sub_type": "message","message": "right→>in to out","message_RU": "Вправо > внутрь + наружу"});
SPAWNING_SECOND_CIRCLE_FLOWERS.push({"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2500, "distance": 250, "offset": 1.5707, "ownerName": "SAFE SPOT", "message": "SAFE"});
SPAWNING_SECOND_CIRCLE_FLOWERS.push({"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2500, "distance": 250, "offset": 1.5707});

// 2 boss Health tips
function start_boss() {
	print = true;
}

function print_fifty(handlers) {
	if (print) {
		handlers['text']({
			"sub_type": "message",
			"message": "50%",
			"message_RU": "50%"
		});
	}
	print = false;
}

function print_twenty(handlers) {
	if (print) {
		handlers['text']({
			"sub_type": "message",
			"message": "20%",
			"message_RU": "20%"
		});
	}
	print = false;
}

// 3 boss: counter of back attacks
function back_attack_HM(handlers) {
	clearTimeout(timer);
	counter++;
	if (counter >= 2) {
		handlers['text']({
			"sub_type": "message",
			"message": "Back attack",
			"message_RU": "Задний"
		});
	}
	timer = setTimeout(()=> {
		counter = 0;
	}, 3000);
}

// 3 boss: color marks in cage
/* ------------------------------------------- */
let colour_to_use = null;
const COLOURS_OFFSETS = {
	"red": 0,
	"yellow": 2.5,
	"blue": -2.5,
};

function set_clockwise(clockwise, handlers, _, third_boss_entity) {
	setTimeout(()=> {
		// Get the colour rotation
		const colour_rotation = clockwise ? ["red", "yellow", "blue"] : ["blue", "yellow", "red"];

		// Loop thru the three cage rotations
		for (let i = 0; i < 3; i++) {
			let current_colour = colour_rotation[(colour_rotation.indexOf(colour_to_use) + i) % 3];

			handlers['spawn']({
				"sub_type": "item",
				"id": 88850,
				"delay": i * 2600,
				"sub_delay": (i + 1) * 3000,
				"distance": 150,
				"offset": COLOURS_OFFSETS[current_colour]
			}, third_boss_entity);
			handlers['spawn']({
				"sub_type": "build_object",
				"id": 1,
				"ownerName": "SAFE SPOT",
				"message": "SAFE",
				"delay": i * 2600,
				"sub_delay": (i + 1) * 3000,
				"distance": 150,
				"offset": COLOURS_OFFSETS[current_colour]
			}, third_boss_entity);
		}

		// clear out clockwise
		setTimeout(()=> {
			clockwise = null;
		}, 12000);
	}, 1000);
}

function change_colour(colour) {
	colour_to_use = colour;
}
/* ------------------------------------------- */

module.exports = {
	// 1 BOSS, NOT ENRAGED

	// Backstep+donuts, stay in, get out
	"s-920-1000-1117-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_RU": "Внутрь + Наружу"}],
	// Stomp+donuts, get out, stay in
	"s-920-1000-1116-0": [{"type": "text","sub_type": "message","message": "get out↓ + stay in↑","message_RU": "Наружу + Внутрь"}],
	// ground thrust 2x+shield swing
	"s-920-1000-1109-0": [{"type": "text","sub_type": "message","message": "back attack","message_RU": "Откид назад"}],
	// Massive In-Out Big AoE+Outer AoE+Inner AoE
	"s-920-1000-1130-0": [{"type": "text","sub_type": "message","message": "full>outer>inner","message_RU": "Общий > Внешний > Внутренний"}],


	// 1 BOSS, ENRAGED

	// Backstep+donuts, stay in, get out
	"s-920-1000-2117-0": [{"type": "text","sub_type": "message","message": "stay in↑ + get out↓","message_RU": "Внутрь + Наружу"}],
	// Stomp+donuts, get out, stay in
	"s-920-1000-2116-0": [{"type": "text","sub_type": "message","message": "get out↓ + stay in↑","message_RU": "Наружу + Внутрь"}],
	// ground thrust 2x+shield swing
	"s-920-1000-2109-0": [{"type": "text","sub_type": "message","message": "back attack","message_RU": "Задняя"}],
	// enraged Massive In-Out Big AoE+Inner AoE+Outer AoE
	"s-920-1000-2130-0": [{"type": "text","sub_type": "message","message": "full>inner>outer","message_RU": "Общий > Внутренний > Внешний"}],


	// 1 BOSS, SPECIAL ATTACKS

	// knockup attack
	"s-920-1000-1300-0": [{"type": "text","sub_type": "message","delay": 600,"message": "Dodge!","message_RU": "Эвейд!"}],


	// 1 BOSS, NOT ENRAGED

	// target one player then turn aroud with swing
	"s-920-2000-1108-0": [{"type": "text","sub_type": "message","message": "Target swing","message_RU": "Таргет"}],
	// target one player then turn aroud with left swing
	"s-920-2000-1113-0": [{"type": "text","sub_type": "message","message": "right hand swing","message_RU": "Правый"}],
	// target one player then turn aroud with right swing
	"s-920-2000-1114-0": [{"type": "text","sub_type": "message","message": "left hand swing","message_RU": "Левый"}],
	// Spin attack
	"s-920-2000-1106-0": [{"type": "text","sub_type": "message","message": "Spin attack","message_RU": "Крутилка"}],
	// Back attack
	"s-920-2000-1105-0": [{"type": "text","sub_type": "message","message": "Back attack","message_RU": "Задняя"}],
	// Random aggro stun
	"s-920-2000-1104-0": [{"type": "text","sub_type": "message","message": "Random jump","message_RU": "Прыжок"}],
	// Stun attack
	"s-920-2000-1110-0": [{"type": "text","sub_type": "message","message": "Stun attack","message_RU": "Стан"}],
	// right hand side swing, tank goes to right, dps goes to left
	"s-920-2000-1112-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right→","message_RU": "Вправо >"},
						  {"type": "text","class_position":"dps","sub_type": "message","message": "left←","message_RU": "< Влево"},
						  {"type": "text","class_position":"heal","sub_type": "message","message": "left←","message_RU": "< Влево"}
	],
	// left hand side swing, tank goes to left, dps goes to right
	"s-920-2000-1111-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left←","message_RU": "< Влево"},
						  {"type": "text","class_position":"dps","sub_type": "message","message": "right→","message_RU": "Вправо >"},
						  {"type": "text","class_position":"heal","sub_type": "message","message": "right→","message_RU": "Вправо >"}
	],


	// 2 BOSS, ENRAGED

	//Spin attack
	"s-920-2000-2106-0": [{"type": "text","sub_type": "message","message": "Spin attack","message_RU": "Крутилка"}],
	// enraged back attack
	"s-920-2000-2105-0": [{"type": "text","sub_type": "message","message": "back attack","message_RU": "Задняя"}],
	// Random aggro stun
	"s-920-2000-2104-0": [{"type": "text","sub_type": "message","message": "Random jump","message_RU": "Прыжок (стан)"}],
	// right hand side swing, tank goes to right, dps goes to left
	"s-920-2000-2112-0": [{"type": "text","sub_type": "message","message": "right hand","message_RU": "Правая полоса|"}],
	// left hand side swing, tank goes to left, dps goes to right
	"s-920-2000-2111-0": [{"type": "text","sub_type": "message","message": "left hand","message_RU": "|Левая полоса"}],
	// Stun attack
	"s-920-2000-2110-0": [{"type": "text","sub_type": "message","message": "Stun attack","message_RU": "Стан"}],
	// target one player then turn aroud with swing
	"s-920-2000-2108-0": [{"type": "text","sub_type": "message","message": "Target swing","message_RU": "Таргет"}],
	// target one player then turn aroud with left swing
	"s-920-2000-2113-0": [{"type": "text","sub_type": "message","message": "right hand swing","message_RU": "Правый"}],
	// target one player then turn aroud with right swing
	"s-920-2000-2114-0": [{"type": "text","sub_type": "message","message": "left hand swing","message_RU": "Левый"}],


	// 2 BOSS, SPECIAL ATTACKS

	// Red, stay 15m away
	"s-920-2000-3119-0": [{"type": "text","sub_type": "message","message": "red: get out↓","message_RU": "Наружу (красный)"}],
	// Blue, stay near within 15m
	"s-920-2000-3220-0": [{"type": "text","sub_type": "message","message": "blue: stay in↑","message_RU": "Внутрь (синий)"}],
	// stun+donut
	"s-920-2000-3116-0": [{"type": "text","sub_type": "message","message": "dodge + stay in↑","message_RU": "Ивейд + к нему"}],
	// random aggro poison
	// 2 boss Health tips
	// 50%
	"h-920-2000-99": [{"type": "func","func": start_boss}],
	"h-920-2000-50": [{"type": "func","func": print_fifty}],
	// 20%
	"h-920-2000-21": [{"type": "func","func": start_boss}],
	"h-920-2000-20": [{"type": "func","func": print_twenty}],


	// 3 BOSS, UNENRAGED

	// pushback when engaging
	"s-920-3000-1315-0": [{"type": "text","sub_type": "message","message": "Pushback","message_RU": "Откид (кайа)"}],
	// random aggro stun
	"s-920-3000-1107-0": [{"type": "text","sub_type": "message","message": "Random jump","message_RU": "Прыжок (стан)"}],
	// random target energy beam
	"s-920-3000-1204-0": [{"type": "text","sub_type": "message","message": "energy beam","message_RU": "Волна"}],
	// heart thrust+anticlockwise spin+right swipe+AOEs from out to in
	"s-920-3000-1109-0": SPAWNING_FIRST_CIRCLE_FLOWERS,
	// heart thrust+clockwise spin+left swipe+AOEs from in to out
	"s-920-3000-1111-0": SPAWNING_SECOND_CIRCLE_FLOWERS,
	// front, back slam
	"s-920-3000-1113-0": [{"type": "text","sub_type": "message","message": "front, back slam","message_RU": "Передний | Задний"}],
	// spinning attack
	"s-920-3000-1115-0": [{"type": "text","sub_type": "message","message": "spinning attack","message_RU": "Круговая"}],
	// golf swing x2 + back slam
	"s-920-3000-1104-0": [{"type": "func","func": back_attack_HM}],
	// teleport back+ spin or front, back slam
	//"s-920-3000-1202-0": [{"type": "text","sub_type": "message","message": "spin or front,back slam","message_RU": "Круговая | Задний"}],
	// target energy beam（almost tank ?_?）
	"s-920-3000-1120-0": [{"type": "text","sub_type": "message","message": "energy beam","message_RU": "Волна"}],


	// 3 BOSS, ENRAGED

	// random aggro, holding blue orb, energy beam
	"s-920-3000-2204-0": [{"type": "text","sub_type": "message","message": "enraged: energy beam","message_RU": "Волна"}],
	// heart thrust+anticlockwise spin+right swipe+AOEs from out to in
	"s-920-3000-2109-0": SPAWNING_FIRST_CIRCLE_FLOWERS,
	// heart thrust+clockwise spin+left swipe+AOEs from in to out
	"s-920-3000-2111-0": SPAWNING_SECOND_CIRCLE_FLOWERS,
	// front, back slam
	"s-920-3000-2113-0": [{"type": "text","sub_type": "message","message": "front, back slam","message_RU": "Передний | Задний"}],
	// golf swing x2 + back slam
	"s-920-3000-2104-0": [{"type": "func","func": back_attack_HM}],
	// spinning attack
	"s-920-3000-2115-0": [{"type": "text","sub_type": "message","message": "spinning attack","message_RU": "Круговая"}],
	// random aggro stun
	"s-920-3000-2107-0": [{"type": "text","sub_type": "message","message": "Random jump","message_RU": "Прыжок (стан)"}],
	// teleport back+ spin or front, back slam
	//"s-920-3000-2202-0": [{"type": "text","sub_type": "message","message": "spin or front,back slam","message_RU": "Круговая | Задний"}],
	// target energy beam（almost tank ?_?）
	"s-920-3000-2120-0": [{"type": "text","sub_type": "message","message": "energy beam","message_RU": "Волна"}],


	// 3 BOSS, SPECIAL ATTACKS

	// clones, random aggro, energy beam
	"s-920-3000-1400-0": [{"type": "text","sub_type": "message","message": "beam","message_RU": "Волны"}],
	// clones, random aggro, spin attack
	"s-920-3000-1401-0": [{"type": "text","sub_type": "message","message": "spin","message_RU": "Круговые"}],
	// color marks in cage
	/* -------------------------------- */ 
	// red
	"ae-0-0-9203037": [{"type": "text","sub_type": "message","message": "Red","message_RU": "Красный"},
					   {"type": "func","func": change_colour.bind(null, 'red')}
	],
	// yellow
	"ae-0-0-9203038": [{"type": "text","sub_type": "message","message": "Yellow","message_RU": "Желтый"},
					   {"type": "func","func": change_colour.bind(null, 'yellow')}
	],
	// blue
	"ae-0-0-9203039": [{"type": "text","sub_type": "message","message": "Blue","message_RU": "Синий"},
					   {"type": "func","func": change_colour.bind(null, 'blue')}
	],
	// anti-clockwise
	"s-920-3000-1317-0": [{"type": "func","func": set_clockwise.bind(null, false)}],
	
	// clockwise
	"s-920-3000-1318-0": [{"type": "func","func": set_clockwise.bind(null, true)}]
	/* -------------------------------- */
};