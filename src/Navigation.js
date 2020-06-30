import React from 'react';
import StoreIcon from '@material-ui/icons/Store';
import ShortTextIcon from '@material-ui/icons/ShortText';
import SettingsIcon from '@material-ui/icons/Settings';
import ForumIcon from '@material-ui/icons/Forum';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';

import { withTranslation, Trans } from 'react-i18next';

import './assets/css/gradients.css';

class Navigation extends React.Component {

    handler = (value) => {
        this.props.getChildClick(value);
    }

    render() {
        return (
            <div className="bg-light border-right menubkg" id="sidebar-wrapper">
                {/*<div className="sidebar-heading">Start Bootstrap </div>*/}
                <div className="list-group list-group-flush text-left">
                    <button disabled="disabled" className="list-group-item list-group-item-action menubkg">
                        <span className="menubtn">
                            <StoreIcon />
                        </span> <Trans i18nKey='navigation.store'></Trans>
                    </button>
                    <button disabled="disabled" className="list-group-item list-group-item-action menubkg">
                        <span className="menubtn">
                            <ShortTextIcon />
                        </span> <Trans i18nKey='navigation.feed'></Trans>
                    </button>
                    <button onClick={() => this.handler('library')} className="list-group-item list-group-item-action menubkg">
                        <span className="menubtn">
                            <VideoLibraryIcon />
                        </span> <Trans i18nKey='navigation.library'></Trans>
                    </button>
                    <button disabled="disabled" className="list-group-item list-group-item-action menubkg">
                        <span className="menubtn">
                            <DeviceHubIcon />
                        </span> <Trans i18nKey='navigation.tournaments'></Trans>
                    </button>
                    <button disabled="disabled" className="list-group-item list-group-item-action menubkg">
                        <span className="menubtn">
                            <PeopleAltIcon />
                        </span> <Trans i18nKey='navigation.friends'></Trans>
                    </button>
                    <button disabled="disabled" className="list-group-item list-group-item-action menubkg">
                        <span className="menubtn">
                            <ForumIcon />
                        </span> <Trans i18nKey='navigation.messages'></Trans>
                    </button>
                    <button disabled="disabled" className="list-group-item list-group-item-action menubkg">
                        <span className="menubtn">
                            <AccountTreeIcon />
                        </span> <Trans i18nKey='navigation.leaderboard'></Trans>
                    </button>
                    <button onClick={() => this.handler('settings')} className="list-group-item list-group-item-action menubkg">
                        <span className="menubtn">
                            <SettingsIcon />
                        </span> <Trans i18nKey='navigation.settings'></Trans>
                    </button>
                </div>
            </div>
        );
    }
}

export default withTranslation('translations')(Navigation);