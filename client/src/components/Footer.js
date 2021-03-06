import React from 'react'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation('footer')
  return (
    <footer className="fdb-block footer-large bg-dark">
      <div className="container">
        <div className="row align-items-top text-center text-md-left">
          <div className="col-12 col-md-4 mt-4 mt-md-0 text-lg-left">
            <h3>
              <strong>{t('followAndContribute')}</strong>
            </h3>
            <p>{t('shareText')}</p>
            <p className="lead">
              <a
                href="https://twitter.com/MuniEncarnacion"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <i className="fab fa-twitter" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/wesley1993678/client"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <i className="fab fa-github" aria-hidden="true" />
              </a>
            </p>
          </div>

          <div className="col-12 col-md-5 offset-md-2 mt-5 mt-md-0 text-lg-left">
            <h3>
              <strong>{t('aboutUs')}</strong>
            </h3>
            <p>{t('aboutUsText')}</p>
            <img
              src="/img/hippa.png"
              alt="Hippa Conform Logo"
              style={{ maxHeight: 80 }}
            />
            <img
              src="/img/privacyshield.png"
              alt="Privacy Shield Logo"
              style={{ maxHeight: 60, paddingLeft: 20 }}
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            © 2020 -{' '}
            <Trans i18nKey="footer:madeWithLove">
              Hecho con amor
              en Paraguay
            </Trans>
          </div>
        </div>
      </div>
    </footer>
  )
}

export const FooterSmall = () => {
  return (
    <footer className="fdb-block footer-small bg-dark">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <p>
              {' '}
              © 2020 - Hecho con
              en Paraguay
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
