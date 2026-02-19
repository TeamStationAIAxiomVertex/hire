{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  buildInputs = [ pkgs.nodejs_21 pkgs.firebase-tools pkgs.git pkgs.lsof ];
  shellHook = ''
    pkill -f "next dev" 2>/dev/null || true
    pkill -f "next-server" 2>/dev/null || true
    echo "Starting Firebase Studio Preview..."
    npm install --legacy-peer-deps
    echo "To start manually, run:  npm run dev -- --port=\$PORT"
  '';
}
