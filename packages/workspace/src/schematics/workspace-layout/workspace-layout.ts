import { chain, Rule } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { updateJsonInTree } from '../../utils/ast-utils';
import { NxJson } from '@nrwl/workspace';

function updateWorkspaceLayout(options: Schema): Rule {
  // check if workspaceLayout exists

  // update workspaceLayout

  return updateJsonInTree<NxJson>('nx.json', (json) => {
    const workspaceLayout = json.workspaceLayout
      ? json.workspaceLayout
      : { appsDir: '', libsDir: '' };

    workspaceLayout.appsDir = options.appsDir;
    workspaceLayout.libsDir = options.libsDir;

    json.workspaceLayout = workspaceLayout;

    return json;
  });
}

export default function (schema: Schema): Rule {
  return chain([updateWorkspaceLayout(schema)]);
}
