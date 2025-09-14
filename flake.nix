{
  description = "NestJS + Yarn Dev Environment (with Direnv)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_20
            typescript
            pnpm
            direnv
          ];

          shellHook = ''
            # Direnv auto-setup
            if [ -e .envrc ]; then
              echo "ℹ️  direnv is managing this shell (envrc found)"
            fi

            echo "✅ NestJS + Yarn dev shell ready!"
            echo "📦 Node: $(node --version)"
            echo "📦 Yarn: $(yarn --version)"
            echo "📦 Nest: $(nest --version)"
          '';
        };
      }
    );
}
