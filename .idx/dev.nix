{ pkgs, ... }: {

  channel = "stable-23.11"; # or "unstable"

  packages = [
    pkgs.nodejs_20
  ];

  env = {
    NODE_ENV = "development";
    NEXT_TELEMETRY_DISABLED = "1";
  };

  idx.extensions = [
    "angular.ng-template"
  ];

  idx.previews = {
    enable = true;
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
        cwd = ".";
      };
    };
  };
}
