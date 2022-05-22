import styled from 'styled-components'
import { DeleteFilled, EditOutlined, GlobalOutlined, HeartOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import { Contact } from 'types/contact'

const Heading = styled.h3`
`

const InfoLine = styled.span`
  margin-left: 8px;
`

export interface ContactCardProps {
  item: Contact
}

export function ContactCard(props: ContactCardProps) {
  return (
    <Card
      cover={<img src={props.item.avatar} alt="avatar" />}
      actions={[
        <HeartOutlined style={{ color: '#ff2727' }} data-testid="action-like" />,
        <EditOutlined data-testid="action-edit" />,
        <DeleteFilled data-testid="action-delete" />
      ]}
    >
      <Heading role="name">{props.item.name}</Heading>
      <p>
        <MailOutlined />
        <InfoLine role="email">{props.item.email}</InfoLine>
      </p>
      <p>
        <PhoneOutlined />
        <InfoLine role="phone">{props.item.phone}</InfoLine>
      </p>
      <p>
        <GlobalOutlined />
        <InfoLine role="website">{props.item.website}</InfoLine>
      </p>
    </Card>
  )
}
