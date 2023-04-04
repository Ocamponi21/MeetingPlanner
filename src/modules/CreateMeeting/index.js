import { Card, Input, Button, message, Form} from "antd";

const CreateMeeting = () => {

    const onFinish = ({name, location, date}) => {
            if(!name){
                message.error('Name required!');
                return;
            }
            if(!location){
                message.error('Email required!');
                return;
            }
            if(!date){
                message.error('Email required!');
                return;
            }
            message.success('Meeting created!');
    };
    return (
        <Card title={'Create New Meeting'} style={styles.page}>
            <Form layout="vertical" onFinish={onFinish}> 
                <Form.Item label={'Name'} required name='name'>
                    <Input placeholder="Enter Name"/>
                </Form.Item>
                <Form.Item label={'Location'} required name ={'location'} >
                <Input placeholder="Enter Location"/>
                </Form.Item>
                <Form.Item label={'Date'} required name='date'>
                    <Input placeholder="Enter Date"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </Card>
    );
};
 
const styles = {
    page:{
        margin:20, 
    },
}

export default CreateMeeting;