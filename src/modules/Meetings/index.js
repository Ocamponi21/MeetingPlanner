import { Card, Table, Button } from "antd"
import { Link } from "react-router-dom";
import meeting from '../../data/dashboard/meeting.json';



const Meeting  = () => {

    const tableColumns = [
        {
            title: 'Meeting Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
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
                <Button type="primary">Create Meeting</Button>
            </Link>
        );
    };

    return (
        <Card title={'Meeting'} style={styles.page} extra={renderNewItemButton()}>
            <Table
                dataSource={meeting}
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

export default Meeting;