import { Card, Table, Button, Popconfirm, message } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { Host } from '../../models';

const ViewHost = () => {

    const [host, setHost] = useState([]);

    useEffect(() => {
        DataStore.query(Host).then(setHost);
    },[]);

    const deleteHost = async (item) => {
        await DataStore.delete(Host, h => h.id.eq(item.id));
        setHost(host.filter((h) => h.id !== item.id));
        message.success('Host deleted.');
    };

    const tableColumns = [
        {
            title: 'Host Name',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, item) => (
                <Popconfirm
                    placement="topLeft"
                    title={'Are you sure you want to delete this host?'}
                    onConfirm={() => deleteHost(item)}
                    okText='Yes'
                    cancelText='No'
                >
                    <Button danger type="primary">Remove</Button>
                </Popconfirm>   
            )
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
                dataSource={host}
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

export default ViewHost;