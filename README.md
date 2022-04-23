# tera-guide

### :information_source: About patch 92 support   
Technically, the tera-guide and [tera-guide-core](https://github.com/hsdn/tera-guide-core) are compatible with patch 92 already, but not all old guides have been added. You can get the needed guide files manually from the [tera-guide-archive](https://github.com/hsdn/tera-guide-archive).   
You will also need an compatible version of the **library** ([download here](https://git.dev.hsdn.org/tera-v92/library/archive/master.zip)).

In the future, after the official server of Tera is closed, we will release a complete version of the guide for patch 92.

### :information_source: О поддержке патча 92   
Технически, tera-guide и [tera-guide-core](https://github.com/hsdn/tera-guide-core) совместимы с патчем 92 уже сейчас, однако не все гайды старые добавлены. Вы можете получить нужные файлы гайдов самостоятельно из [архива гайдов](https://github.com/hsdn/tera-guide-archive).   
Также вам потребуется совместимая версия **library** ([скачать тут](https://git.dev.hsdn.org/tera-v92/library/archive/master.zip)).

Вдальнейшем, после закрытия официального сервера Tera, мы выпустим готовую версию гайда под патч 92.

### :white_check_mark: Поддержка русского языка в гайдах для сервера Menma's TERA

1. Скачать файл [fonts_eur.patched.gpk](https://drive.google.com/file/d/1LQBCKI4yxprVOCqJSQa2bwNiVnNQoZyx/view?usp=sharing) и поместить его в директорию `\Client\S1Game\CookedPC\Art_Data\Packages\S1UI`.
2. Зайти в Menma's TERA и ввести команду **guide ru** в чат Toolbox в игре.

---

The dungeon guide module with Text-to-speech notifications, display hints on screen and drawing zones of bosses attacks and mechanics. Available English and Russian languages (detects automatically).

Модуль подсказок по данжам с возможностью голосовых уведомлений, вывод подсказок в чат или на экран, а также отрисовка зон атак боссов и механик. Поддерживаются Русский и Английский языки (определяются автоматически).

#### Other translations / Другие локализации
* [**Spanish (Español)** by Loliconera](https://github.com/Loliconera/tera-guide-spanish)
* [**Spanish (Español)** by Emilia](https://github.com/emilia-s2/Guia-DG-Portugues-Espanol)
* [**Portuguese (Português)** by Emilia](https://github.com/emilia-s2/Guia-DG-Portugues-Espanol)

## Dependencies / Зависимости
* **tera-guide-core** - https://github.com/hsdn/tera-guide-core

When using TeraToolbox, all dependencies will be installed automatically.   
При использовании TeraToolbox, все зависимости будут установлены автоматически.

## Commands / Команды
Toolbox(/8) | Command description | Описание команды
--- | --- | ---
**guide** | Module on/off | Вкл./выкл. модуля
**guide&nbsp;gui** | Show module GUI| Показать графический интерфейс
**guide&nbsp;voice**<br>(default: off) | Text-to-speech (TTS) notices on/off, speech rate is set by command **guide `1`~`10`** | Вкл./выкл. голосовых уведомлений (TTS), скорость чтения задается командой **guide `1`~`10`**
**guide&nbsp;lNotice**<br>(default: off) | Send notices to chat channel "Notice" instead of on-screen messages on/off | Вкл./выкл. отправки уведомлений в канал чата "Важно" вместо показа экранных сообщений
**guide&nbsp;gNotice**<br>(default: off) | Send notices to party chat channel on/off | Вкл./выкл. отправки уведомлений в канал чата группы
**guide&nbsp;`auto`/`en`/`ru`**<br>(default: auto) | Set guide language | Выбор языка перевода
**guide&nbsp;`1`~`10`**<br>(default: 2) | Set TTS speech rate | Регулировка скорости чтения голосовых сообщений
**guide&nbsp;spawnObject**<br>(default: on) | Spawn marker objects on/off | Вкл./выкл. спавна маркировочных объектов
**guide&nbsp;stream**<br>(default: off) | Streamer Mode on/off (hide all notices and objects, TTS will played) | Вкл./выкл. режима стримера (скрывает все уведомления и маркеры, TTS будет проигрываться)
**guide&nbsp;dungeons** | List of all supported dungeons and its ids | Список всех поддерживаемых данжей и их id
**guide&nbsp;verbose&nbsp;`id`**<br>(default: on for all) | Send notices for specified by `id` dungeon on/off | Вкл./выкл. всех уведомлений для данжа, где `id` - идентификатор данжа
**guide&nbsp;spawnObject&nbsp;`id`**<br>(default: on for all) | Spawn marker objects for specified by `id` dungeon on/off | Вкл./выкл. спавна объектов для данжа, где `id` - идентификатор данжа
**guide&nbsp;help** | List of supported commands | Вывод поддерживаемых команд

## Supported dungeons / Поддерживаемые данжи
id | Dungeon name | Название данжа
--- | --- | ---
7011 | Shadow of the Gutrends (Guardian) | Живодеры и черная тень (хранитель)
7015 | Escape from Balder's Refuge (Guardian) | Операция "Спасти Убежище Балдера" (хранитель)
3040 | Lumikan's Trial | Сонный паралич Лукмии (Подземелье испытаний)
3042 | Gardan's Trial | Место казни (Подземелье испытаний)
3043 | Harnovog's Trial | Крепость Тенебриса (Подземелье испытаний)
3046 | Rogash's Trial | Лаборатория слияния (Подземелье испытаний)
3047 | Hall of the Argon Queen (Hard) | Обитель Шандры Манайи (сложно)
3209 | Chaos Ice Throne | Ледяной трон Хаоса
3108 | Cursed Antaroth's Abyss | Проклятый Омут Антароса
3126 | Corrupted Skynest (Hard) | Логово Бессмертного Келсаика
9920 | Antaroth's Abyss (Hard) | Омут Бездушного Антароса
3109 | Ice Throne | Ледяной трон
3036 | Sky Cruiser (Hard) | Небесный крейсер (сложно)
9068 | Shadow Sanguinary (Hard) | Убежище Дуриона (сложно)
3027 | Forbidden Arena [Hagufna] | [Бессмертный воин] Арена безумия
3105 | Fusion Laboratory | Лаборатория Слияния
9794 | Thaumetal Refinery | Лаборатория Сайрекса

## Notices settings / Настройка уведомлений

* On screen (on bottom side) and chat notices, if **lNotice** parameter is *on*.   
  Уведомления на экране (в нижней части), а также в чате, если параметр **lNotice** - *включен*.   
  ![](https://i.imgur.com/BPlK58M.png)

* When **gNotice** parameter is *on*, notices will also be sent to party chat channel.   
  Если параметр **gNotice** был *включен*, уведомления также будут отправляться в канал чата группы.   

* The message on top side of the screen, if **lNotice** parameter is *off* (by default).   
  Сообщение в верхней части экрана, если параметр **lNotice** - *выключен* (по-умолчанию).   
  ![](https://i.imgur.com/r2bb8Wc.png)   
  You can set the color for this type of notices using the commands or GUI (also change color in the Toolbox chat).   
  Возможен выбор цвета для этого вида уведомлений при помощи команд или графического интерфейса (также изменяется цвет в чате Toolbox).

* When Streamer Mode is *on* (**stream** parameter), all text notices ONLY sent to Toolbox(/8) chat channel, but TTS notices will be played.   
  Если *включен* режим стримера (парам. **stream**), все текстовые уведомления будут отправляться ТОЛЬКО в канал чата Toolbox(/8), однако голосовые уведомления будут проигрываться.

* To disable or enable TTS notifications, use the **guide voice** command.   
  Для отключения или включения голосовых уведомлений используется команда **guide voice**.

## Module GUI / Графический интерфейс

* When you enter the **guide gui** command, the module GUI is displayed, allowing you to change basic settings.   
  При вводе команды **guide gui** отображается графический интерфейс модуля, позволяющий осуществить основные настройки.   
  ![](https://i.imgur.com/72hDCvQ.png)

## More information / Дополнительная информация

* Developers wiki: https://github.com/hsdn/tera-guide-core/wiki
* For questions and suggestions, contact via Discord: **JKQ#5649**

## Credits
- **[Kasea](https://github.com/Kaseaa)** - Original developer of Tera-Guide module
- **[michengs](https://github.com/michengs)** - Author of base code for most guides and module core
- **[ZC](https://github.com/tera-mod)** - Provided coordinates for rendering attack areas and mechanics
- **[Kuroine](https://github.com/Kuroine)** - Author of base code for the DA guide
- **[Multarix](https://github.com/Multarix)** - Author of the RR guide and also making changes to the English translation
- **[Owyn](https://github.com/Owyn)** - Developer of great guides for RK-9, AA and GV, whose code was used
- **[Emilia](https://github.com/emilia-s2)** - Author of Portuguese translation and guardian guides
- **[Loliconera](https://github.com/Loliconera)** - Author of Spanish translation
- **[ITunk](https://github.com/GrafNikola)** - Author of initial Russian translation
