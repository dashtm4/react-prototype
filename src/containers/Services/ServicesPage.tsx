import React from 'react';
import { useTranslation } from 'react-i18next';

import BaseButton from '../../components/BaseButton';
import FormInput from '../../components/FormInput';
import ServiceItem from '../../components/ServiceItem';

import './Services.scss';

interface IService {
  title: string;
  description: string;
  link: string;
  promocode: string;
  activated?: boolean;
}

interface IProps {
  searchWord: string | undefined;
  filteredServices: any;
  handleUpdateSearchWord: (
    searchWord: string,
  ) => void;
  handleActivate: (
    link: string,
    promoCode: string,
  ) => void;
}

function ServicesPage({
  searchWord,
  filteredServices,
  handleUpdateSearchWord,
  handleActivate,
}: IProps) {
  const { t } = useTranslation();

  const handleReset = () => {
    handleUpdateSearchWord('');
  };

  return (
    <section className="services--wrapper">
      <div className="title">
        {t('Services')}
      </div>
      <div className="services--action">
        <FormInput
          className="services--form-input"
          label={t('Filter')}
          placeholder={t('Filter services...')}
          value={searchWord}
          onChange={handleUpdateSearchWord}
        />
        <BaseButton
          className="reset--button"
          label={t('Reset')}
          onClick={handleReset}
          variant="outlined"
        />
      </div>
      {filteredServices.map((
        service: IService,
        serviceIndex: number,
      ) =>
        <ServiceItem
          className="services--item"
          name={service.title}
          description={service.description}
          promoCode={service.promocode}
          link={service.link}
          activated={service.activated || false}
          key={serviceIndex}
          onActivate={handleActivate}
        />
      )}
    </section>
  )
};

export default ServicesPage;
