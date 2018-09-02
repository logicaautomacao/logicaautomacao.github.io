import { I18n } from 'react-i18nify';

import pt from './config/texts.json';

export default {
  setup() {
    I18n.setTranslations({ pt });
    I18n.setLocale('pt');

    I18n.setHandleMissingTranslation(
      key => I18n.t('missing-translation', key),
    );
  },
};

export const t = I18n.t.bind(I18n);
