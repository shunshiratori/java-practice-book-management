# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要
これは`java-practice-book`という名前のReact + TypeScriptアプリケーションです。名前とは異なりJavaではなく、Create React Appで作成されたReactフロントエンドアプリケーションです。バックエンドAPI（`http://localhost:8080`）から書籍データを取得して表示する構成になっています。

## コマンド

### 開発
- `npm start` - 開発サーバーを起動（http://localhost:3000）
- `npm test` - テストランナーを起動（watch mode）
- `npm run build` - プロダクション用にビルド
- `npm run eject` - Create React Appの設定を取り出し（非可逆的）

## アーキテクチャ

### フロントエンド構成
- **React 19.1.1** + **TypeScript** のSPAアプリケーション
- **Create React App** ベースのプロジェクト構成
- テストには **Jest** と **@testing-library/react** を使用

### データフロー
- App.tsxでuseEffectを使用してバックエンドAPI（`http://localhost:8080/books`）からBookデータを取得
- Book型定義: `{ id: number; title: string; author: string; }`
- 取得したデータをuseStateで管理し、リスト表示

### ファイル構成
- `src/App.tsx` - メインアプリケーションコンポーネント、API呼び出しと書籍リスト表示を担当
- 標準的なCreate React Appのフォルダー構造

### 依存関係
- React関連のcore dependencies
- TypeScript設定（strict mode有効）
- Jest/React Testing Libraryのテスト環境