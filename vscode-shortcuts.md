Here's a concise **VS Code Cheat Sheet** with essential shortcuts for HTML/CSS development and general coding:

---

### **HTML-Specific Shortcuts**
| Shortcut (Win/Linux) | Shortcut (Mac) | Action |
|----------------------|----------------|--------|
| `!` + `Tab` | `!` + `Tab` | Generate HTML5 boilerplate |
| `div` + `Tab` | `div` + `Tab` | Emmet: `<div></div>` |
| `div.class` + `Tab` | `div.class` + `Tab` | Emmet: `<div class="class"></div>` |
| `div#id` + `Tab` | `div#id` + `Tab` | Emmet: `<div id="id"></div>` |
| `Ctrl+Shift+>` | `Cmd+Shift+>` | Wrap with tag (select text first) |
| `Alt+Up/Down` | `Option+Up/Down` | Move line/selection up/down |

---

### **CSS-Specific Shortcuts**
| Shortcut (Win/Linux) | Shortcut (Mac) | Action |
|----------------------|----------------|--------|
| `m10` + `Tab` | `m10` + `Tab` | Emmet: `margin: 10px;` |
| `p10` + `Tab` | `p10` + `Tab` | Emmet: `padding: 10px;` |
| `bgc` + `Tab` | `bgc` + `Tab` | Emmet: `background-color: #fff;` |
| `Ctrl+Space` | `Cmd+Space` | Trigger CSS IntelliSense |
| `Ctrl+K Ctrl+C` | `Cmd+K Cmd+C` | Add CSS comment |

---

### **General Coding Shortcuts**
| Shortcut (Win/Linux) | Shortcut (Mac) | Action |
|----------------------|----------------|--------|
| `Ctrl+/` | `Cmd+/` | Toggle line comment |
| `Ctrl+D` | `Cmd+D` | Select next occurrence |
| `Ctrl+F` | `Cmd+F` | Find in file |
| `Ctrl+H` | `Cmd+H` | Replace in file |
| `Ctrl+Shift+L` | `Cmd+Shift+L` | Select all occurrences |
| `Alt+Click` | `Option+Click` | Multi-cursor editing |
| `Ctrl+` ` ` | `Cmd+` ` ` | Toggle terminal |

---

### **Navigation Shortcuts**
| Shortcut (Win/Linux) | Shortcut (Mac) | Action |
|----------------------|----------------|--------|
| `Ctrl+P` | `Cmd+P` | Quick file open |
| `Ctrl+G` | `Cmd+G` | Go to line |
| `Ctrl+Tab` | `Ctrl+Tab` | Switch between open files |
| `F12` | `F12` | Go to definition |

---

### **Bonus: Essential Emmet Abbreviations**
| Abbreviation | Expands To |
|--------------|-----------|
| `ul>li*3` | `<ul><li></li><li></li><li></li></ul>` |
| `a[href="#"]` | `<a href="#"></a>` |
| `.row>.col*2` | `<div class="row"><div class="col"></div><div class="col"></div></div>` |
| `@m` | `@media screen and (min-width: ) {}` |

---

### **Pro Tips**
1. **See all shortcuts**: `Ctrl+K Ctrl+S` (Win/Linux) / `Cmd+K Cmd+S` (Mac)
2. **Customize shortcuts**: File > Preferences > Keyboard Shortcuts
3. **Enable auto-closing tags**: Add this to VS Code settings:
   ```json
   "html.autoClosingTags": true,
   "emmet.triggerExpansionOnTab": true
   ```

**Print-Friendly Version**: [Download PDF Cheat Sheet](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf) (Official VS Code)
