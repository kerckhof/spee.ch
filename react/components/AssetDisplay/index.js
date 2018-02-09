import { connect } from 'react-redux';
import View from './view';
import { fileRequested } from 'actions/show';

const mapStateToProps = ({ show }) => {
  return {
    error    : show.displayAsset.error,
    status   : show.displayAsset.status,
    asset    : show.assetList[show.showAsset.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFileRequest: (name, claimId) => {
      dispatch(fileRequested(name, claimId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
