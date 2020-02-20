# Blog des CoderDojo Schöneweide

## Aufbau der Website

### _includes
Enthält HTML-Code-Snippets, die einen eigenständigen Teil der Website abbilden (z.B. Events-Section, Sidebar, ...)

### _layout
Enthält HTML-Code-Snippets, die die Struktur der Website abbilden. Diese können als Vorlage für neue Seiten verwendet werden. (Beispiel: Siehe impressum.md)

### _posts
Enthält Blog-Posts im Markdown-Format. Diese werden automatisch in der Seitenleiste der Website verlinkt. Der Dateiname muss die folgende Struktur haben: `<yyyy>-<MM>-<dd>-<Titel-mit-Bindestrichen-anstatt-Leerzeichen>.md`. Im Header der der Datei können Metainformationen wie Kategorien und Titel des Posts eingetragen werden. Darunter folgt der Text des Blog-Posts. Weitere Infos über die Formatierung von Blog-Posts gibt es hier: [Jekyll Blog Posts](https://jekyllrb.com/docs/posts/)

### assets
Hier können Dateien abgelegt werden, die auf der Website eingebunden werden sollen (z.B. Bilder, Stylesheets, ...). Die `main.scss` enthält die Style-Informationen der Website. Sie stellt einige Klassen und Variablen zur Wiederverwendung zur Verfügung:

#### Variablen
- `$color-dark`: Primäre dunkle Farbe für die Website, z.B. für Text
- `$color-light`: Primäre helle Farbe für die Website, z.B. für Hintergründe
- `$color-main`: Themenfarbe (Akzentfarbe) der Website, momentan orange

#### Klassen
- `.wrapper`: Beschränkt die Breite des Inhalts auf eine vorgegebene Weite (momentan 900px)
- `.background-main`: Färbt den Hintergrund des Elements in der Farbe, die in der Variablen `$color-main` gepeichert ist

### scripts
Enthält JavaScript-Snippets, die auf der Website eingebunden werden sollen.

## Lokale Installation

ACHTUNG: Um das Projekt unter Windows testen zu können, muss zuerst Ruby installiert werden (siehe [ruby-lang.org](https://www.ruby-lang.org/en/))

- Projekt von GitHub klonen
- Terminal im Projekt-Root-Ordner öffnen
- `bundle install` ausführen

Um die Website lokal zu testen, kann nach der Installation `bundle exec jekyll serve` im Terminal ausgeführt werden
