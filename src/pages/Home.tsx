import { ContactList } from 'components/ContactList'
import { useContacts } from 'functions/contacts'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 24px;
`

export function Home() {
  const { contacts, error, loading } = useContacts()
  if (error) {
    return <div>Error</div>
  }
  return (
    <Wrapper>
      <ContactList items={contacts} loading={loading} />
    </Wrapper>
  )
}
