import { useState } from "react";

interface Props {
  onSave: (settings: Settings) => void;
  initial: Settings;
}

export interface Settings {
  daemonUrl: string;
  theme: "dark" | "light";
  autoConnect: boolean;
}

export function SettingsPanel({ onSave, initial }: Props) {
  const [settings, setSettings] = useState(initial);

  return (
    <div className="settings-panel">
      <h3>Settings</h3>
      <div className="setting-row">
        <label>Daemon URL</label>
        <input
          value={settings.daemonUrl}
          onChange={(e) => setSettings({ ...settings, daemonUrl: e.target.value })}
        />
      </div>
      <div className="setting-row">
        <label>Theme</label>
        <select
          value={settings.theme}
          onChange={(e) => setSettings({ ...settings, theme: e.target.value as "dark" | "light" })}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
      <div className="setting-row">
        <label>Auto-connect</label>
        <input
          type="checkbox"
          checked={settings.autoConnect}
          onChange={(e) => setSettings({ ...settings, autoConnect: e.target.checked })}
        />
      </div>
      <button className="save-btn" onClick={() => onSave(settings)}>Save</button>
    </div>
  );
}
