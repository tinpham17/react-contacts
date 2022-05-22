import { List } from 'antd'
import { Contact } from 'types/contact'
import { ContactCard } from 'components/ContactCard'

export interface ContactListProps {
  loading: boolean
  items: Contact[]
}

export function ContactList(props: ContactListProps) {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
      }}
      dataSource={props.items}
      loading={props.loading}
      renderItem={(item) => (
        <List.Item>
          <ContactCard item={item} />
        </List.Item>
      )}
    />
  )
}
