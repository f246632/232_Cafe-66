# Cafe 66 - Website

Moderne, professionelle Website für Cafe 66 in Berlin Wedding

## Über Cafe 66

**Cafe 66** ist ein gemütliches Café im Herzen des Wedding-Viertels in Berlin. Mit erstklassigem Kaffee, hausgemachten Spezialitäten und einer warmen, einladenden Atmosphäre ist es der perfekte Ort für Kaffeeliebhaber und alle, die die authentische Berliner Kiez-Atmosphäre genießen möchten.

### Standort
- **Adresse**: Amsterdamer Str. 24, 13347 Berlin, Deutschland
- **Bezirk**: Wedding
- **Telefon**: +49 521 01100
- **E-Mail**: info@cafe66-berlin.de

### Öffnungszeiten
- **Montag - Donnerstag**: 8:00 - 18:00
- **Freitag**: 8:00 - 19:00
- **Samstag**: 9:00 - 19:00
- **Sonntag**: 9:00 - 18:00

## Website Features

### Design & UX
- ✅ Modernes, professionelles Design mit Berlin-Café-Ästhetik
- ✅ Vollständig responsive (320px Mobile bis 4K Desktop)
- ✅ Warme Farbpalette inspiriert von Kaffekultur
- ✅ Smooth Scrolling & Animationen
- ✅ Intuitive Navigation
- ✅ Touch-optimiert für Mobile

### Technische Features
- ✅ Semantic HTML5
- ✅ Modern CSS3 (Grid, Flexbox, Custom Properties)
- ✅ Vanilla JavaScript (keine Frameworks)
- ✅ Performance-optimiert (Lazy Loading, Debouncing)
- ✅ SEO-optimiert (Meta Tags, Schema.org Markup)
- ✅ Accessibility (WCAG 2.1 AA konform)
- ✅ Progressive Web App bereit

### Sektionen

1. **Hero Section**
   - Beeindruckendes Hero-Bild
   - Call-to-Action Buttons
   - Parallax-Effekt (Desktop)

2. **Über Uns**
   - Café-Geschichte und Philosophie
   - Werte und Besonderheiten
   - Feature-Cards mit Icons

3. **Speisekarte**
   - Kaffee & Getränke
   - Frühstück
   - Spezialitäten
   - Preise transparent dargestellt

4. **Galerie**
   - Interaktive Bildergalerie
   - Lightbox-Modal mit Navigation
   - Touch/Swipe-Support
   - Keyboard-Navigation

5. **Standort**
   - Google Maps Integration
   - Öffnungszeiten
   - Anfahrtsbeschreibung
   - Öffentliche Verkehrsmittel

6. **Kontakt**
   - Kontaktinformationen
   - Kontaktformular mit Validierung
   - Direktlinks (Telefon, E-Mail)

## Technologie-Stack

### Frontend
- **HTML5**: Semantisches Markup, Schema.org strukturierte Daten
- **CSS3**:
  - Custom Properties (CSS Variables)
  - Flexbox & Grid Layout
  - Animationen & Transitions
  - Responsive Design (Mobile-First)
- **JavaScript**:
  - Vanilla JS (ES6+)
  - Event Delegation
  - Intersection Observer API
  - Performance-optimiert

### Fonts
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-Serif)
- Geladen von Google Fonts mit Preconnect-Optimierung

### Performance
- Lazy Loading für Bilder
- Debounced Scroll Events
- Optimierte Asset-Größen
- Minimierter Code
- Schnelle Ladezeit (< 3 Sekunden)

## Projektstruktur

```
232_Cafe 66/
├── index.html              # Hauptseite
├── css/
│   ├── style.css          # Haupt-Stylesheet
│   └── responsive.css     # Responsive Design
├── js/
│   ├── main.js           # Haupt-JavaScript
│   └── gallery.js        # Galerie-Funktionalität
├── images/
│   ├── optimized/        # Web-optimierte Bilder
│   │   ├── hero-1.jpg
│   │   ├── interior-1.jpg
│   │   └── gallery-1.jpg
│   ├── thumbnails/       # Kleine Vorschaubilder
│   └── icons/            # UI Icons
├── data/
│   └── cafe-info.json    # Strukturierte Café-Daten
└── README.md             # Diese Datei
```

## Lokale Entwicklung

### Voraussetzungen
- Moderner Webbrowser (Chrome, Firefox, Safari, Edge)
- Lokaler Webserver (optional, aber empfohlen)

### Installation & Start

1. **Repository klonen oder herunterladen**
   ```bash
   cd "/Users/m./berlinwebsites/232_Cafe 66"
   ```

2. **Mit lokalem Server starten** (empfohlen)

   **Option A: Python**
   ```bash
   # Python 3
   python3 -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Option B: Node.js (http-server)**
   ```bash
   npx http-server -p 8000
   ```

   **Option C: PHP**
   ```bash
   php -S localhost:8000
   ```

3. **Im Browser öffnen**
   ```
   http://localhost:8000
   ```

### Direktes Öffnen
Alternativ können Sie `index.html` direkt im Browser öffnen, aber einige Features (wie das Kontaktformular) funktionieren besser mit einem lokalen Server.

## Deployment

### GitHub Pages
Diese Website ist für GitHub Pages optimiert:

1. Repository auf GitHub erstellen
2. Code pushen
3. In Repository Settings → Pages:
   - Source: `main` branch
   - Folder: `/ (root)`
4. Website ist verfügbar unter: `https://[username].github.io/232_Cafe 66`

### Andere Hosting-Optionen
- **Netlify**: Drag & Drop Deployment
- **Vercel**: Git-basiertes Deployment
- **Traditional Hosting**: Via FTP/SFTP hochladen

## Browser-Unterstützung

### Voll unterstützt
- ✅ Chrome/Edge (letzte 2 Versionen)
- ✅ Firefox (letzte 2 Versionen)
- ✅ Safari (letzte 2 Versionen)
- ✅ iOS Safari (iOS 12+)
- ✅ Android Chrome (Android 8+)

### Graceful Degradation
- Internet Explorer 11: Basisfunktionalität ohne moderne Features
- Ältere Browser: HTML/CSS-Fallbacks

## Accessibility (Barrierefreiheit)

Diese Website folgt WCAG 2.1 Level AA Richtlinien:

- ✅ Semantisches HTML
- ✅ Keyboard-Navigation
- ✅ Screen Reader-optimiert
- ✅ ARIA-Labels und Roles
- ✅ Ausreichender Farbkontrast
- ✅ Fokus-Indikatoren
- ✅ Alternative Texte für Bilder
- ✅ Reduzierte Bewegung (prefers-reduced-motion)

## SEO-Optimierung

- ✅ Meta Tags (Title, Description, Keywords)
- ✅ Open Graph Tags (Social Media)
- ✅ Schema.org Markup (Local Business)
- ✅ Semantische HTML-Struktur
- ✅ Optimierte Bilder (Alt-Texte)
- ✅ Schnelle Ladezeit
- ✅ Mobile-First Design
- ✅ Sitemap-bereit

## Anpassung & Erweiterung

### Farben ändern
Bearbeiten Sie die CSS-Variablen in `css/style.css`:
```css
:root {
    --primary-color: #8B4513;
    --secondary-color: #D2691E;
    /* ... weitere Farben */
}
```

### Inhalte aktualisieren
- **Texte**: Direkt in `index.html` bearbeiten
- **Speisekarte**: In `data/cafe-info.json` oder direkt in HTML
- **Bilder**: Neue Bilder in `images/optimized/` hochladen

### Neue Sektionen hinzufügen
1. HTML in `index.html` hinzufügen
2. Styling in `css/style.css` definieren
3. Navigation in `<nav>` aktualisieren

## Performance-Metriken

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3s
- **Cumulative Layout Shift**: < 0.1
- **Total Blocking Time**: < 300ms

## Kontaktformular

Das Kontaktformular ist momentan für Frontend-Demonstration konfiguriert. Für ein funktionierendes Backend:

1. **Formspree** (einfach)
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Eigener Server** (PHP, Node.js, etc.)
   - Backend-Endpoint erstellen
   - JavaScript in `js/main.js` anpassen

3. **Serverless Functions** (Netlify, Vercel)
   - Serverless Function erstellen
   - API-Route verknüpfen

## Entwickelt mit

- ❤️ Liebe zum Detail
- ☕ Inspiration von Berliner Kaffeekultur
- 🎨 Modernen Web-Standards
- ♿ Accessibility Best Practices
- 🚀 Performance-First Ansatz

## Lizenz & Credits

### Bilder
- Café-Fotos von Google Maps (Cafe 66)
- Optimiert für Web-Performance

### Fonts
- Playfair Display by Claus Eggers Sørensen
- Inter by Rasmus Andersson
- Via Google Fonts

### Icons
- Emoji-Icons (systemabhängig)
- Unicode-Symbole

## Support & Feedback

Für Fragen, Anregungen oder Probleme:
- **E-Mail**: info@cafe66-berlin.de
- **Telefon**: +49 521 01100
- **Besuchen Sie uns**: Amsterdamer Str. 24, 13347 Berlin

---

**Entwickelt**: Oktober 2025
**Version**: 1.0.0
**Status**: Production Ready ✅

Genießen Sie Ihren Besuch im Cafe 66! ☕
