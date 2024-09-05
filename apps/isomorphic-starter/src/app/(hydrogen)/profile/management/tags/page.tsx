import PageHeader from '@/app/shared/page-header';
import ModalButton from '@/app/shared/modal-button';
import RolesGrid from '@/app/shared/roles-permissions/roles-grid';
import CreateRole from '@/app/shared/roles-permissions/create-role';

const pageHeader = {
  title: 'All Tags',
  breadcrumb: [
    {
      name: 'Management'
    },
    {
      name: 'Tags'
    },
  ],
};

export default function BlankPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <ModalButton label="Add New Tag" view={<CreateRole />} />
      </PageHeader>
      <RolesGrid />
    </>
  );
}
