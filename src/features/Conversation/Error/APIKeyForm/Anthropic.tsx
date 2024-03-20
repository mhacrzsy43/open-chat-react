import { Anthropic } from '@openhub/icons';
import { Input } from 'antd';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ModelProvider } from '@/libs/agent-runtime';
import { useGlobalStore } from '@/store/global';
import { modelProviderSelectors } from '@/store/global/selectors';

import { FormAction } from '../style';

const AnthropicForm = memo(() => {
  const { t } = useTranslation('error');
  // const [showProxy, setShow] = useState(false);

  const [apiKey, setConfig] = useGlobalStore((s) => [
    modelProviderSelectors.anthropicAPIKey(s),
    s.setModelProviderConfig,
  ]);

  return (
    <FormAction
      avatar={<Anthropic size={56} />}
      description={t('unlock.apikey.Anthropic.description')}
      title={t('unlock.apikey.Anthropic.title')}
    >
      <Input.Password
        autoComplete={'new-password'}
        onChange={(e) => {
          setConfig(ModelProvider.Anthropic, { apiKey: e.target.value });
        }}
        placeholder={'*********************************'}
        type={'block'}
        value={apiKey}
      />
    </FormAction>
  );
});

export default AnthropicForm;
