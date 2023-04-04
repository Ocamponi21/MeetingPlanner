import { Card, Table, Button} from "antd"
import { Link } from "react-router-dom";
import participant from '../../data/dashboard/participant.json';

const Participant = () => {

    const tableColumns = [
        {
            title: 'Participants Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => <Button danger type="primary">Remove</Button>
        }
    ];

    const renderNewItemButton = () => {
        return (
            <Link to={'create'}>
                <Button type="primary">Create Participant</Button>
            </Link>
        );
    };

    return (
        <Card title={'Participant'} style={styles.page} extra={renderNewItemButton()}>
            <Table
                dataSource={participant}
                columns={tableColumns}
                rowKey='id'
            />
        </Card>
    );
};

const styles = {
    page: {
        margin: 20,
    },
}

export default Participant;