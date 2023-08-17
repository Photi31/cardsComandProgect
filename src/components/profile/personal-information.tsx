import defaultAva from 'assets/icons/defaultAva.png'
import { Card } from 'ui/card'
import { EditableSpan } from 'ui/editable-span'
import { Typography } from 'ui/typography'
import { UploadPhoto } from 'ui/upload-photo'
import { Avatars } from 'ui/userAvatar/avatar.tsx'

import s from './personal-information.module.scss'

type Props = {
  email: string
  avatar?: string
  name: string
  onLogout: () => void
  onAvatarChange: (newAvatar: string) => void
  onNameChange: (newName: string) => void
}

export const PersonalInformation = ({
  avatar,
  email,
  name,
  onAvatarChange,
  onNameChange,
  onLogout,
}: Props) => {
  // const [newAvatar, setNewAvatar] = useState<string | undefined>(avatar)
  const handleNameChanged = (name: string) => onNameChange(name)

  const handleAvatarChange = (newAvatar: string) => onAvatarChange(newAvatar)

  const handleLogout = () => onLogout()

  const hasAvatar = avatar || defaultAva

  return (
    <Card className={s.profileContainer}>
      <Typography variant="large" className={s.title}>
        Personal Information
      </Typography>
      <div className={s.photoContainer}>
        <div>
          <Avatars src={hasAvatar} />
          <UploadPhoto onAvatarChange={handleAvatarChange} />
        </div>
      </div>
      <EditableSpan
        name={name}
        email={email}
        handleLogout={handleLogout}
        onValueChange={handleNameChanged}
      />
    </Card>
  )
}
