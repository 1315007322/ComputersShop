import * as React from 'react'
import { Layout, BackTop } from 'antd';
import Nav from './nav';
import { RiRocket2Fill } from 'react-icons/ri'
import styled from 'styled-components';
import TopHeader from './components/TopHeader';

const { Header, Footer, Content } = Layout;

const BasicLayout = (props: any) => {
	return (
		<Wrap>
			<Layout className='layout'>
				<Header className='header'>
					<TopHeader />
					<Nav />
				</Header>
				<Content style={{ padding: '10px 20px', marginTop: '93px',background: '#fff' }}>
					<div className="base_content">
						{props.children}
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					苏ICP备19044106号-2 Powered by YHF © 2022 Copyright
				</Footer>
				<BackTop>
					<div className='backTop'>
						<RiRocket2Fill />
					</div>
				</BackTop>
			</Layout>
		</Wrap>

	)
}

const Wrap = styled.div`
	.layout{
		box-shadow: 0px 0px 5px 0px #efefef;
   		transform: scale3d(1, 1, 1);
		position: relative;
	}
	.header{
		background-color: #fff;
		position: fixed;
		z-index: 10;
		height: auto !important ;
		width: 100%;
		padding: 0;
	}
	.ant-layout-header{
		line-height: 44px;
	}
	.backTop{
		width: 50px;
		height: 50px;
		background-color: #000;
		border-radius: 50%;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30px;
	}
`
export default BasicLayout;