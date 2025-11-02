import { Badge } from '@chillUi';

import packageJson from '../../../../package.json';

export default function FooterVersionBadge() {
  const version = process.env.NEXT_PUBLIC_APP_VERSION || packageJson.version;
  const env = process.env.NEXT_PUBLIC_ENV || 'local';

  if (env !== 'production') {
    return (
      <Badge variant="primary">
        v{version} ({env})
      </Badge>
    );
  }
  return null;
}
