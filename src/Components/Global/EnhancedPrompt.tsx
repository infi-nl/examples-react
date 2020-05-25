import { Location } from "history";
import React, { useEffect, useState } from "react";
import { Prompt, useHistory } from "react-router-dom";
import Modal from "./Modal"

interface Props {
  when?: boolean | undefined;
  shouldBlockNavigation: (location: Location) => boolean;
}

const EnhancedPrompt = ({
  when,
  shouldBlockNavigation,
}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [locationToNavigateTo, setLocationToNagivateTo] = useState<Location | null>(null);
  const [isNavigationConfirmed, setConfirmedNavigation] = useState(false);
  const history = useHistory();
  
  const closeModal = () => {
    setModalVisible(false);
  };

  const handleBlockedNavigation = (nextLocation: Location): boolean => {
    if (!isNavigationConfirmed && shouldBlockNavigation(nextLocation)) {
      setModalVisible(true);
      setLocationToNagivateTo(nextLocation);
      return false;
    }
    return true;
  };

  const handleConfirmNavigationClick = () => {
    setModalVisible(false);
    setConfirmedNavigation(true);
  }; 

  useEffect(() => {
    if (isNavigationConfirmed && locationToNavigateTo) {
      history.push(locationToNavigateTo.pathname)
    }
  }, [isNavigationConfirmed, locationToNavigateTo, history]);

  return (
    <React.Fragment>
      <Prompt when={when} message={handleBlockedNavigation} />
      <Modal
        isShown={modalVisible}
        titleText={"Do you want to close without saving?"}
        explanatoryText={"You have unsaved changes. Are you sure you want leave this page without saving?"}
        cancelButtonText={"Cancel"}
        confirmButtonText={"Confirm"}
        onCancel={closeModal}
        onConfirm={handleConfirmNavigationClick}
      />
    </React.Fragment>
  );
};

export default EnhancedPrompt;