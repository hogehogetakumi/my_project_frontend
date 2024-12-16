import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; 
import axios from 'axios';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cors());


// サインアップ
app.post('/signup', async (req, res) => {
    const { username, password, email } = req.body;
    try {
        // バックエンドにリクエスト転送
        const response = await axios.post('http://127.0.0.1:8000/api/signup', {
            username,
            password,
            email
        })

        // バックエンドのレスポンスをそのままフロントエンドに返す
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error forwarding to backend:', error);
    }
});

// ログインエンドポイント
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // バックエンドにリクエスト転送
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
            email,
            password,
        })

        // 返却されたtokenをauthトークンとしてローカルストレージに格納
        // if(response.data.token) {
        //     localStorage.setItem('authToken', response.data.token);
        // }
        // バックエンドのレスポンスをそのままフロントエンドに返す
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error forwarding to backend:', error);
    }
});



// サーバー起動
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`BFF server is running on http://localhost:${PORT}`);
});
