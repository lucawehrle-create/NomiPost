import { loginAction } from "./actions";
import CompassRose from "@/components/CompassRose";

export default function AdminLogin() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="paper-card hand-border p-10 max-w-md w-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12">
            <CompassRose className="w-full h-full" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-mattgold-dark font-semibold">
              NomiPost
            </p>
            <h1 className="headline-serif text-2xl font-semibold text-nomi-violet">
              Admin-Bereich
            </h1>
          </div>
        </div>

        <p className="text-sm text-tintengrau mb-6">
          Bitte das Admin-Passwort eingeben, um die Warteliste einzusehen.
        </p>

        <form action={loginAction} className="space-y-4">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-nomi-violet mb-2"
            >
              Passwort
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              className="paper-input"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Einloggen
          </button>
        </form>
      </div>
    </main>
  );
}
