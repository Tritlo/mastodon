import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './icon_button';
import { defineMessages, injectIntl } from 'react-intl';
import ImmutablePureComponent from 'react-immutable-pure-component';
import punycode from 'punycode';

const messages = defineMessages({
  unblockDomain: { id: 'account.unblock_domain', defaultMessage: 'Unblock domain {domain}' },
});

export default @injectIntl
class Account extends ImmutablePureComponent {

  static propTypes = {
    domain: PropTypes.string,
    onUnblockDomain: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
  };

  handleDomainUnblock = () => {
    this.props.onUnblockDomain(this.props.domain);
  }

  render () {
    const { domain, intl } = this.props;
    const prettyDomain = domain ? punycode.toUnicode(domain) : domain;

    return (
      <div className='domain'>
        <div className='domain__wrapper'>
          <span className='domain__domain-name'>
            <strong>{prettyDomain}</strong>
          </span>

          <div className='domain__buttons'>
            <IconButton active icon='unlock' title={intl.formatMessage(messages.unblockDomain, { domain: prettyDomain })} onClick={this.handleDomainUnblock} />
          </div>
        </div>
      </div>
    );
  }

}
