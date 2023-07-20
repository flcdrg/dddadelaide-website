import React from 'react'
import content from '../../../static/agenda/2019.json'
import CurrentAgenda from '../../components/currentAgenda'
import withPageMetadata, { WithPageMetadataProps } from '../../components/global/withPageMetadata'
import { Session } from '../../config/types'
import Page from '../../layouts/main'

interface AgendaPageProps extends WithPageMetadataProps {
  sessions?: Session[]
}

class AgendaPage extends React.Component<AgendaPageProps> {
  static async getInitialProps() {
    return { sessions: content as Session[] }
  }

  render() {
    const conference = this.props.pageMetadata.conference

    return (
      <Page
        pageMetadata={this.props.pageMetadata}
        title='2019 Agenda'
        hideBanner={true}
        description={conference.Name + '2019 agenda.'}
      >
        <div className='container'>
          <h1>2019 Agenda</h1>

          <CurrentAgenda
            sessions={this.props.sessions}
            previousConferenceInstances={this.props.pageMetadata.conference.PreviousInstances}
            sessionsUrl={this.props.pageMetadata.appConfig.getAgendaUrl}
            sponsors={this.props.pageMetadata.conference.Sponsors}
          />
        </div>
      </Page>
    )
  }
}

export default withPageMetadata(AgendaPage)
