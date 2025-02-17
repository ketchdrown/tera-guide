// Manaya's Core (Hard)
//
// made by Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		// 1 BOSS
		"s-427-42701-1106-0": [{ type: "text", sub_type: "message", message_RU: "Волна вперед", message: "Frontal Wind" }],
		"s-427-42701-1102-0": [{ type: "text", sub_type: "message", message_RU: "Передний разрез", message: "Frontal Cut" }],
		"s-427-42701-1104-0": [{ type: "text", sub_type: "message", message_RU: "Передний удар", message: "Frontal Hit" }],
		"s-427-42701-1105-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ", message: "AoE" }],
		"s-427-42701-1110-0": [{ type: "text", sub_type: "message", message_RU: "Прыжок + АоЕ", message: "Jump + AoE" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 400, 0, 3000] }
		],
		"s-427-42701-1114-1": [{ type: "text", sub_type: "message", message_RU: "АоЕ", message: "AoE" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 110, 12, 250, 0, 2500] }
		],
		"s-427-42701-1112-0": [{ type: "text", sub_type: "message", message_RU: "Передняя АоЕ (большая)", message: "Frontal AoE (Big)" }],
		"s-427-42701-1215-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ", message: "AoE" }],
		"s-427-42701-1214-0": [{ type: "text", sub_type: "message", message_RU: "Передний разрез + АоЕ", message: "Frontal Cut + AoE" }],
		"s-427-42701-1204-0": [{ type: "text", sub_type: "message", message_RU: "Таргет", message: "Target" }],
		"s-427-42701-1121-0": [{ type: "text", sub_type: "message", message_RU: "Прыжок + Передний разрез", message: "Jump + Frontal Cut" }],
		"s-427-42701-2106-0": "s-427-42701-1106-0",
		"s-427-42701-2102-0": "s-427-42701-1102-0",
		"s-427-42701-2104-0": "s-427-42701-1104-0",
		"s-427-42701-2105-0": "s-427-42701-1105-0",
		"s-427-42701-2110-0": "s-427-42701-1110-0",
		"s-427-42701-2114-1": "s-427-42701-1114-1",
		"s-427-42701-2112-0": "s-427-42701-1112-0",
		"s-427-42701-2215-0": "s-427-42701-1215-0",
		"s-427-42701-2214-0": "s-427-42701-1214-0",
		"s-427-42701-2121-0": "s-427-42701-1121-0",
		"s-427-42701-2204-0": "s-427-42701-1204-0",

		// 2 BOSS
		"s-427-42702-1104-0": [{ type: "text", sub_type: "message", message_RU: "Лазер", message: "Laser" }],
		"s-427-42702-1109-0": [{ type: "text", sub_type: "message", message_RU: "Удар щита назад", message: "Back Shield Hit" }],
		"s-427-42702-1106-0": [{ type: "text", sub_type: "message", message_RU: "Бомба (таргет)", message: "Bomb (Target)" }],
		"s-427-42702-1117-0": [{ type: "text", sub_type: "message", message_RU: "Стан + АоЕ", message: "Stun + AoE" }],
		"s-427-42702-1118-0": [{ type: "text", sub_type: "message", message_RU: "Стан + Волна", message: "Stun + Wave" },
			{ type: "text", sub_type: "message", delay: 4600, message_RU: "Эвейд!", message: "Dodge!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 400, 3000, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 16, 240, 3000, 3000] }
		],
		"s-427-42702-1112-0": [{ type: "text", sub_type: "message", message_RU: "Прыжок назад", message: "Jump Backwards" }],

		"dm-0-0-9027004": [{ type: "text", sub_type: "notification", message_RU: "Убить [c=#05a0fa]синих[/c] миньонов", message: "Kill [c=#05a0fa]Blue[/c] Minions" }],
		"dm-0-0-9027005": [{ type: "text", sub_type: "notification", message_RU: "Убить [c=#e82331]красных[/c] миньонов", message: "Kill [c=#e82331]Red[/c] Minions" }],
		"s-427-42702-2104-0": "s-427-42702-1104-0",
		"s-427-42702-2109-0": "s-427-42702-1109-0",
		"s-427-42702-2106-0": "s-427-42702-1106-0",
		"s-427-42702-2117-0": "s-427-42702-1117-0",
		"s-427-42702-2118-0": "s-427-42702-1118-0",
		"s-427-42702-2112-0": "s-427-42702-1112-0",

		// 3 BOSS
		// Fase 1
		"s-427-2001-1101-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ стрелы (+)", message: "Arrows AoE (+)" },
			{ type: "spawn", func: "vector", args: [553, 120, 100, 176, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 240, 100, -176, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 60, 100, 4, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 300, 100, -4, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 150, -100, 274, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 210, 100, -94, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, -30, -101, 94, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 210, -101, 86, 400, 0, 5000] }
		],
		"s-427-2001-1102-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ стрелы (X)", message: "Arrows AoE (X)" },
			{ type: "spawn", func: "vector", args: [553, 160, 110, 222, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 290, 110, -132, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 110, 110, 48, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 340, 110, 42, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 10, 115, -41, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 260, 115, -49, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 80, 115, 131, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 190, 115, -221, 400, 0, 5000] }
		],
		"s-427-2001-1105-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ стрелы (малая)", message: "Arrows AoE (Small)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 210, 2000, 4000] }
		],
		"s-427-2001-1103-0": [{ type: "text", sub_type: "message", message_RU: "Волна АоЕ", message: "Wave AoE" }],
		"s-427-2001-1111-0": [{ type: "text", sub_type: "message", message_RU: "Стан", message: "Stun" }],
		"s-427-2004-1101-0": [{ type: "text", sub_type: "message", message_RU: "Когти", message: "Claws" }],
		"s-427-2001-1109-0": [{ type: "text", sub_type: "message", message_RU: "Внутренняя АоЕ", message: "Inner AoE" }],
		"s-427-2001-2101-0": "s-427-2001-1101-0",
		"s-427-2001-2102-0": "s-427-2001-1102-0",
		"s-427-2001-2105-0": "s-427-2001-1105-0",
		"s-427-2001-2111-0": "s-427-2001-1111-0",
		"s-427-2004-2101-0": "s-427-2004-1101-0",
		"s-427-2001-2103-0": "s-427-2001-1103-0",
		"s-427-2001-2109-0": "s-427-2001-1109-0",

		// Fase 2
		"s-427-2007-1103-0": [{ type: "text", sub_type: "message", message_RU: "Передняя атака", message: "Frontal Attack" }],
		"s-427-2007-1205-0": [{ type: "text", sub_type: "message", message_RU: "Телепорт", message: "Teleport" }],
		"s-427-2007-1102-0": [{ type: "text", sub_type: "message", message_RU: "Вертолет", message: "Helicopter" }],
		"s-427-2007-1113-0": [{ type: "text", sub_type: "message", message_RU: "Левая рука ", message: "Left Hand Attack" }],
		"s-427-2007-1105-0": [{ type: "text", sub_type: "message", message_RU: "Правая рука ", message: "Right Hand Attack" }],
		"s-427-2007-1112-0": [{ type: "text", sub_type: "message", message_RU: "Дебаф (бублик)", message: "Donut Debuff" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 330, 0, 12000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 16, 185, 0, 9000] }
		],
		"s-427-2007-1108-0": [{ type: "text", sub_type: "message", message_RU: "Атака (таргет)", message: "Target Attack" }],
		"s-427-2007-1114-0": [{ type: "text", sub_type: "message", message_RU: "Удар назад", message: "Back Attack" }],
		"s-427-2007-1115-0": [{ type: "text", sub_type: "message", message_RU: "Хвост", message: "Tail Attack" }],
		"s-427-2007-1111-0": [{ type: "text", sub_type: "message", message_RU: "Хвост вперед", message: "Frontal Tail Attack" }],
		"s-427-2007-1109-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ (таргет)", message: "AoE Target" }],
		"s-427-2007-1107-0": [{ type: "text", sub_type: "message", message_RU: "Лазер", message: "Laser Attack" },
			{ type: "spawn", func: "vector", args: [912, 360, 985, 180, 950, 0, 2500] },
			{ type: "spawn", func: "vector", args: [912, 369, 995, 180, 950, 0, 2500] },
			{ type: "spawn", func: "vector", args: [912, 351, 995, 180, 950, 0, 2500] }
		],
		"s-427-2007-1106-0": [{ type: "text", sub_type: "message", message_RU: "Бомба (таргет)", message: "Target Bomb" }],
		"s-427-2007-1204-0": [{ type: "text", sub_type: "message", message_RU: "Большая АоЕ (бежать)", message: "Big AoE (Run)" }],
		"qb-427-2007-427050": [
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_RU: "Чума/Регресс", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_RU: "Регресс", class_position: "mystic" }
		],
		"s-427-2007-2205-0": "s-427-2007-1205-0",
		"s-427-2007-2102-0": "s-427-2007-1102-0",
		"s-427-2007-2113-0": "s-427-2007-1113-0",
		"s-427-2007-2105-0": "s-427-2007-1105-0",
		"s-427-2007-2112-0": "s-427-2007-1112-0",
		"s-427-2007-2115-0": "s-427-2007-1115-0",
		"s-427-2007-2111-0": "s-427-2007-1111-0",
		"s-427-2007-2109-0": "s-427-2007-1109-0",
		"s-427-2007-2107-0": "s-427-2007-1107-0",
		"s-427-2007-2106-0": "s-427-2007-1106-0",
		"s-427-2007-2204-0": "s-427-2007-1204-0",
		"s-427-2007-2103-0": "s-427-2007-1103-0",
		"s-427-2007-2114-0": "s-427-2007-1114-0",
		"s-427-2007-2108-0": "s-427-2007-1108-0"
	};
};