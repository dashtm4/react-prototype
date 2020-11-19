import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getServices } from '../../selectors';
import { fetchServices } from '../../redux/actions';
import ServicesPage from './ServicesPage';

interface IService {
  title: string;
  description: string;
  link: string;
  promocode: string;
}

type TProps =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>;

function Services({
  services,
  fetchServices,
}: TProps) {
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    setFilteredServices(
      services.filter((service: IService) => (
        service.title
          .toLowerCase()
          .includes((searchWord || '').toLowerCase())
    )));
  }, [services, searchWord]);

  const handleUpdateSearchWord = (newSearchWord: string) => {
    setSearchWord(newSearchWord);
  };

  return (
    <ServicesPage
      searchWord={searchWord}
      filteredServices={filteredServices}
      handleUpdateSearchWord={handleUpdateSearchWord}
    />
  )
};

const mapStateToProps = (state: any) => ({
  services: getServices(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(
    {
      fetchServices,
    },
    dispatch,
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Services);
