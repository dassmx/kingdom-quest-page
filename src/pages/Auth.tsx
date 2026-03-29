import { useState } from "react";
import { Shield, Mail, Lock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/worlds");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden px-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_80%_55%_/_0.05)_0%,_transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="w-full max-w-md relative z-10">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao início
        </Link>

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-primary" />
          <h1 className="font-display text-2xl font-bold uppercase tracking-[0.2em] text-foreground">
            Dominus
          </h1>
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-sm p-8 shadow-lg relative">
          {/* Ornamental top border */}
          <div className="absolute top-0 left-4 right-4 h-px border-ornate" />

          {/* Toggle tabs */}
          <div className="flex mb-8 border-b border-border">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 pb-3 font-display text-sm uppercase tracking-widest transition-colors relative ${
                isLogin
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Entrar
              {isLogin && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-primary" />
              )}
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 pb-3 font-display text-sm uppercase tracking-widest transition-colors relative ${
                !isLogin
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Cadastrar
              {!isLogin && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-primary" />
              )}
            </button>
          </div>

          {/* Title */}
          <p className="text-center text-muted-foreground font-body text-sm mb-6">
            {isLogin
              ? "Entre em sua conta e retorne ao campo de batalha."
              : "Forje sua identidade e junte-se à conquista."}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="font-display text-xs uppercase tracking-wider text-foreground">
                  Nome de Guerra
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome no campo de batalha"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 bg-secondary border-border font-body placeholder:text-muted-foreground/50 focus:border-primary"
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="font-display text-xs uppercase tracking-wider text-foreground">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-secondary border-border font-body placeholder:text-muted-foreground/50 focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="font-display text-xs uppercase tracking-wider text-foreground">
                Senha
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 bg-secondary border-border font-body placeholder:text-muted-foreground/50 focus:border-primary"
                  required
                  minLength={6}
                />
              </div>
            </div>

            {isLogin && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  Esqueceu sua senha?
                </button>
              </div>
            )}

            <Button
              type="submit"
              className="w-full font-display uppercase tracking-widest text-sm bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm h-11"
            >
              {isLogin ? "Entrar no Reino" : "Forjar Conta"}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground font-display uppercase tracking-wider">ou</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Bottom toggle */}
          <p className="text-center text-sm text-muted-foreground font-body">
            {isLogin ? "Ainda não tem uma conta?" : "Já possui uma conta?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              {isLogin ? "Cadastre-se" : "Entrar"}
            </button>
          </p>

          {/* Ornamental bottom border */}
          <div className="absolute bottom-0 left-4 right-4 h-px border-ornate" />
        </div>

        {/* Footer text */}
        <p className="text-center text-xs text-muted-foreground/60 mt-6 font-body">
          Ao continuar, você concorda com os termos de uso de Dominus.
        </p>
      </div>
    </div>
  );
};

export default Auth;
