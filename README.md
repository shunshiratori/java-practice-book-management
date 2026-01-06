# java-practice-book

書籍管理システムのフロントエンドアプリケーションです。バックエンド API から書籍データを取得して表示します。
🌐 **公開 URL**: [https://java-practice-book-management.vercel.app/](https://java-practice-book-management.vercel.app/)

## 技術スタック

- **React 19.1.1**
- **TypeScript**
- **Create React App**
- **Jest** + **@testing-library/react**

## 前提条件

- Node.js（推奨: v14 以上）
- npm
- バックエンド API（`http://localhost:8080`で実行されている必要があります）

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm start
```

開発サーバーが起動したら、ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 利用可能なコマンド

### `npm start`

開発モードでアプリを起動します。
[http://localhost:3000](http://localhost:3000) でアプリが表示されます。

編集を行うとページが自動的にリロードされます。
コンソールには lint エラーも表示されます。

### `npm test`

テストランナーをインタラクティブな watch モードで起動します。

### `npm run build`

アプリを本番環境用に `build` フォルダへビルドします。
React を本番モードで正しくバンドルし、最高のパフォーマンスになるように最適化します。

ビルドは圧縮され、ファイル名にはハッシュが含まれます。

### `npm run eject`

**注意: これは一方向の操作です。一度 `eject` すると元に戻せません！**

ビルドツールや設定に満足できない場合、いつでも `eject` できます。

## プロジェクト構成

```
java-practice-book/
├── src/
│   ├── App.tsx          # メインアプリケーションコンポーネント
│   ├── App.css          # アプリケーションスタイル
│   ├── index.tsx        # エントリーポイント
│   └── ...
├── public/              # 静的ファイル
├── package.json
└── tsconfig.json        # TypeScript設定
```

## API 連携

このアプリケーションは、バックエンド API から書籍データを取得します。

- **エンドポイント**: `http://localhost:8080/books`
- **メソッド**: GET
- **レスポンス形式**:
  ```typescript
  interface Book {
    id: number;
    title: string;
    author: string;
  }
  ```

## 参考リンク

- [Create React App ドキュメント](https://facebook.github.io/create-react-app/docs/getting-started)
- [React ドキュメント](https://ja.react.dev/)
