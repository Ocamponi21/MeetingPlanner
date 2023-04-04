import { Card, Table, Button, Popconfirm} from "antd"
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import { DataStore } from '@aws-amplify/datastore';
import { CreateHost } from '../../models';

const Host = () => {

    const[createHost, setCreateHost] = useState([]);

    useEffect(() => {
        DataStore.query(Host).then(setCreateHost);
    });

    console.log(createHost)

    const [CreateMeeting] = useState([]);

    const tableColumns = [
        {
        title: 'Host Name',
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
        render: () => <Button danger type="primary">Remove </Button>
    }
    ];

    const renderNewItemButton = () => {
        return (
            <Link to={'host'}>
                <Button type="primary">Create Host</Button>
            </Link>
        );
    };

    return (
        <Card title={'Host'} style={styles.page} extra={renderNewItemButton()}>
            <Table
                dataSource={CreateHost}
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

export default Host;