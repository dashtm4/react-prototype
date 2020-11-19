import React from 'react';

import BaseButton from '../../components/BaseButton';
import FormInput from '../../components/FormInput';
import ServiceItem from '../../components/ServiceItem';

import './Services.scss';

interface IService {
  title: string;
  description: string;
  link: string;
  promocode: string;
}

interface IProps {
  searchWord: string | undefined;
  filteredServices: any;
  handleUpdateSearchWord: (
    searchWord: string,
  ) => void;
}

function ServicesPage({
  searchWord,
  filteredServices,
  handleUpdateSearchWord,
}: IProps) {
  const handleReset = () => {
    handleUpdateSearchWord('');
  };

  return (
    <section className="services--wrapper">
      <div className="title">
        Services
      </div>
      <div className="services--action">
        <FormInput
          className="services--form-input"
          label="Filter"
          placeholder="Filter services..."
          value={searchWord}
          onChange={handleUpdateSearchWord}
        />
        <BaseButton
          className="reset--button"
          label="Reset"
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
          key={serviceIndex}
        />
      )}
    </section>
  )
};

export default ServicesPage;
