import { useIconsDict } from '@/hooks/use-icons-dict';
import { supabase } from '@/utils/supabase';

export async function Contacts() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { fetchIcon } = useIconsDict();
  const { data: contacts } = await supabase.from('social-media').select('*');

  return (
    <ul className="flex content-center mt-4">
      {contacts?.map((social) => {
        return (
          <a
            href={social.url}
            target="_blank"
            key={social.url}
            className="mx-2"
          >
            {fetchIcon(social.name, 28)}
          </a>
        );
      })}
    </ul>
  );
}
