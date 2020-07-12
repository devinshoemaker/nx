# workspace-layout

Updates the workspace layout

## Usage

```bash
nx generate workspace-layout ...
```

By default, Nx will search for `workspace-layout` in the default collection provisioned in `angular.json`.

You can specify the collection explicitly as follows:

```bash
nx g @nrwl/workspace:workspace-layout ...
```

Show what will be generated without writing to disk:

```bash
nx g workspace-layout ... --dry-run
```

## Options

### appsDir

Type: `string`

Applications directory

### libsDir

Type: `boolean`

Libraries directory
