/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => LastModifiedTimestampInStatusBar
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  createdPrepend: "Created: ",
  createdTimestampFormat: "YYYY-MM-DD H:mm:ss",
  createdEnabled: true,
  lastModifiedEnabled: true,
  lastModifiedPrepend: "Last Modified: ",
  lastModifiedTimestampFormat: "YYYY-MM-DD H:mm:ss",
  cycleOnClickEnabled: false
};
var LastModifiedTimestampInStatusBar = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.lastModifiedStatusBarItemEl = this.addStatusBarItem();
    this.createdStatusBarItemEl = this.addStatusBarItem();
  }
  cycleDisplayedStatus() {
    if (this.settings.lastModifiedEnabled && this.settings.createdEnabled) {
      this.settings.lastModifiedEnabled = true;
      this.settings.createdEnabled = false;
    } else if (this.settings.lastModifiedEnabled && !this.settings.createdEnabled) {
      this.settings.lastModifiedEnabled = false;
      this.settings.createdEnabled = true;
    } else if (!this.settings.lastModifiedEnabled && this.settings.createdEnabled) {
      this.settings.lastModifiedEnabled = true;
      this.settings.createdEnabled = true;
    } else {
      this.settings.lastModifiedEnabled = true;
      this.settings.createdEnabled = false;
    }
    this.updateLastModified();
    this.updateCreated();
    this.saveSettings();
  }
  updateLastModifiedDisplay() {
    if (this.lastModifiedTimestamp && this.settings.lastModifiedEnabled) {
      if (this.lastModifiedStatusBarItemEl === null) {
        this.lastModifiedStatusBarItemEl = this.addStatusBarItem();
      }
      this.lastModifiedStatusBarItemEl.setText(this.settings.lastModifiedPrepend + this.lastModifiedTimestamp);
      this.lastModifiedStatusBarItemEl.onclick = () => {
        if (this.settings.cycleOnClickEnabled)
          this.cycleDisplayedStatus();
      };
      if (this.settings.lastModifiedEnabled)
        this.lastModifiedStatusBarItemEl.show();
    }
    if (this.lastModifiedStatusBarItemEl !== null && !this.settings.lastModifiedEnabled) {
      this.lastModifiedStatusBarItemEl.hide();
    }
  }
  updateCreatedDisplay() {
    if (this.createdTimestamp && this.settings.createdEnabled) {
      if (this.createdStatusBarItemEl === null) {
        this.createdStatusBarItemEl = this.addStatusBarItem();
      }
      this.createdStatusBarItemEl.setText(this.settings.createdPrepend + this.createdTimestamp);
      this.createdStatusBarItemEl.onclick = () => {
        if (this.settings.cycleOnClickEnabled)
          this.cycleDisplayedStatus();
      };
      if (this.settings.createdEnabled)
        this.createdStatusBarItemEl.show();
    }
    if (this.createdStatusBarItemEl !== null && !this.settings.createdEnabled) {
      this.createdStatusBarItemEl.hide();
    }
  }
  updateCreatedTimestamp() {
    const file = this.app.workspace.getActiveFile();
    if (file) {
      const timestamp = (0, import_obsidian.moment)(file.stat.ctime).format(this.settings.createdTimestampFormat);
      this.createdTimestamp = timestamp;
    }
  }
  updateCreated() {
    this.updateCreatedTimestamp();
    this.updateCreatedDisplay();
  }
  updateLastModified() {
    this.updateLastModifiedTimestamp();
    this.updateLastModifiedDisplay();
  }
  updateLastModifiedTimestamp() {
    const file = this.app.workspace.getActiveFile();
    if (file) {
      this.lastModifiedTimestamp = (0, import_obsidian.moment)(file.stat.mtime).format(this.settings.lastModifiedTimestampFormat);
    }
  }
  async onload() {
    await this.loadSettings();
    this.registerEvent(this.app.vault.on("modify", (file) => {
      if (this.settings.lastModifiedEnabled && file === this.app.workspace.getActiveFile()) {
        this.updateLastModified();
      }
    }));
    if (this.settings.lastModifiedEnabled) {
      this.updateLastModified();
    }
    if (this.settings.createdEnabled) {
      this.updateCreated();
    }
    this.app.workspace.on("active-leaf-change", () => {
      if (this.settings.lastModifiedEnabled) {
        this.updateLastModified();
      }
      if (this.settings.createdEnabled) {
        this.updateCreated();
      }
    });
    this.addSettingTab(new LastModifiedTimestampInStatusBarSettingTab(this.app, this));
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var LastModifiedTimestampInStatusBarSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h3", { text: "Last Modified Timestamp" });
    new import_obsidian.Setting(containerEl).setName("Enabled").setDesc("Turn the display on or off in your status bar.").addToggle(
      (bool) => bool.setValue(this.plugin.settings.lastModifiedEnabled).onChange(async (value) => {
        this.plugin.settings.lastModifiedEnabled = value;
        await this.plugin.saveSettings();
        this.plugin.updateLastModified();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Timestamp Format").setDesc("Compatible with Moment.js formats, e.g. YYYY-MM-DD H:mm:ss").addText(
      (text) => text.setPlaceholder("Enter format").setValue(this.plugin.settings.lastModifiedTimestampFormat).onChange(async (value) => {
        this.plugin.settings.lastModifiedTimestampFormat = value;
        await this.plugin.saveSettings();
        this.plugin.updateLastModified();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Title in Status Bar").addText(
      (text) => text.setPlaceholder("Last Modified: ").setValue(this.plugin.settings.lastModifiedPrepend).onChange(async (value) => {
        this.plugin.settings.lastModifiedPrepend = value;
        await this.plugin.saveSettings();
        this.plugin.updateLastModified();
      })
    );
    containerEl.createEl("h3", { text: "Created Timestamp" });
    new import_obsidian.Setting(containerEl).setName("Enabled").setDesc("Turn the display on or off in your status bar.").addToggle(
      (bool) => bool.setValue(this.plugin.settings.createdEnabled).onChange(async (value) => {
        this.plugin.settings.createdEnabled = value;
        await this.plugin.saveSettings();
        this.plugin.updateCreated();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Timestamp Format").setDesc("Compatible with Moment.js formats, e.g. YYYY-MM-DD H:mm:ss").addText(
      (text) => text.setPlaceholder("Enter format").setValue(this.plugin.settings.createdTimestampFormat).onChange(async (value) => {
        this.plugin.settings.createdTimestampFormat = value;
        await this.plugin.saveSettings();
        this.plugin.updateCreated();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Title in Status Bar").addText(
      (text) => text.setPlaceholder("Created: ").setValue(this.plugin.settings.createdPrepend).onChange(async (value) => {
        this.plugin.settings.createdPrepend = value;
        await this.plugin.saveSettings();
        this.plugin.updateCreated();
      })
    );
    containerEl.createEl("h3", { text: "Cycle Displayed Timestamp On Click" });
    new import_obsidian.Setting(containerEl).setName("Enabled").setDesc("Enable cycling between the last modified and created timestamp on click in status bar.").addToggle(
      (bool) => bool.setValue(this.plugin.settings.cycleOnClickEnabled).onChange(async (value) => {
        this.plugin.settings.cycleOnClickEnabled = value;
        await this.plugin.saveSettings();
      })
    );
  }
};

/* nosourcemap */