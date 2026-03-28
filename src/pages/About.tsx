import { motion } from "framer-motion";
import { Shield, Sword, Castle, Users, Hexagon, Map, ShieldOff, Crown, Crosshair, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import unitDwarf from "@/assets/unit-dwarf.png";
import unitElf from "@/assets/unit-elf.png";
import unitMage from "@/assets/unit-mage.png";
import unitKing from "@/assets/unit-king.png";
import unitBallista from "@/assets/unit-ballista.png";
import unitGriffin from "@/assets/unit-griffin.png";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const units = [
  { name: "Anão Guerreiro", role: "Infantaria pesada", desc: "Resistentes e implacáveis. Anões são a linha de frente que não recua. Suas armaduras de aço e machados de guerra cortam qualquer formação inimiga.", image: unitDwarf },
  { name: "Arqueiro Elfo", role: "Ataque à distância", desc: "Precisão mortal a longas distâncias. Os elfos dominam florestas e colinas, transformando terreno elevado em vantagem letal.", image: unitElf },
  { name: "Mago Humano", role: "Suporte arcano", desc: "Mestres das artes arcanas, capazes de virar batalhas inteiras com feitiços devastadores. Frágeis, mas indispensáveis.", image: unitMage },
  { name: "Rei Comandante", role: "Líder de exército", desc: "Sua presença inspira tropas e desbloqueia formações especiais. Perder o Rei pode significar a ruína do seu domínio.", image: unitKing },
  { name: "Balista de Cerco", role: "Artilharia", desc: "Máquina de destruição capaz de derrubar muralhas e dizimar formações a longa distância. Lenta, mas devastadora.", image: unitBallista },
  { name: "Grifo Montado", role: "Cavalaria aérea", desc: "Unidade de elite que sobrevoa o campo de batalha. Ideal para flanquear, reconhecer e atacar pontos vulneráveis.", image: unitGriffin },
];

const worldFeatures = [
  { icon: Hexagon, title: "Tiles Hexagonais", desc: "O mundo de Dominus é composto por milhares de hexágonos interconectados. Cada tile possui recursos, terreno e valor estratégico únicos." },
  { icon: Map, title: "Biomas Dinâmicos", desc: "Florestas densas reduzem a velocidade de cavalaria. Montanhas favorecem arqueiros. Pântanos debilitam unidades pesadas. O terreno é sua arma — ou seu inimigo." },
  { icon: Globe, title: "Mundos Disputados", desc: "Cada servidor é um mundo completo com continentes, rotas comerciais e pontos estratégicos. Guildas disputam o controle total do mapa." },
];

const guildFeatures = [
  { icon: Users, title: "Formação de Guildas", desc: "Reúna aliados, defina hierarquias e estabeleça leis internas. Guildas são o coração político e militar de Dominus." },
  { icon: Crown, title: "Diplomacia & Alianças", desc: "Negocie tratados de paz, acordos comerciais ou declare guerra abertamente. A diplomacia pode ser mais poderosa que qualquer exército." },
  { icon: Castle, title: "Domínio Territorial", desc: "Guildas podem controlar regiões inteiras, cobrando tributos e defendendo fronteiras. O poder se conquista e se mantém." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
        <motion.div {...fadeUp} className="relative max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
            <Shield className="w-5 h-5 text-primary" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground uppercase tracking-wider text-gold-glow">
            Conheça Dominus
          </h1>
          <p className="font-body text-lg text-secondary-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            Um jogo de estratégia medieval massivo, jogado diretamente no navegador.
            Sem downloads, sem Pay to Win — apenas sua mente contra o mundo.
          </p>
          <div className="mt-6 h-px w-48 mx-auto border-ornate border-t" />
        </motion.div>
      </section>

      {/* O que é Dominus */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wider">
              O que é <span className="text-primary">Dominus</span>?
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="font-body text-lg text-secondary-foreground leading-relaxed">
                Dominus é um jogo de estratégia em tempo real onde você comanda exércitos,
                constrói fortalezas e disputa territórios em um vasto mundo hexagonal com
                milhares de jogadores simultâneos.
              </p>
              <p className="font-body text-lg text-secondary-foreground leading-relaxed">
                Não existe um trono de rei supremo. O poder em Dominus pertence às
                <span className="text-primary font-semibold"> guildas</span> — alianças de
                jogadores que conquistam, defendem e governam mundos inteiros pela diplomacia
                e pela guerra.
              </p>
            </div>
            <div className="space-y-4">
              <p className="font-body text-lg text-secondary-foreground leading-relaxed">
                Cada decisão importa: o bioma onde você posiciona suas tropas, as alianças que
                forma, os recursos que controla. Em Dominus, a vitória pertence a quem pensa
                mais adiante.
              </p>
              <p className="font-body text-lg text-secondary-foreground leading-relaxed">
                Jogue direto no navegador, em qualquer dispositivo. Sem instalações,
                sem barreiras. E acima de tudo:
                <span className="text-primary font-bold"> zero Pay to Win</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mundo */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
        <div className="relative max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wider">
              O <span className="text-primary">Mundo</span>
            </h2>
            <div className="mt-4 h-px w-48 mx-auto border-ornate border-t" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {worldFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
              >
                <f.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unidades */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wider">
              <span className="text-primary">Unidades</span> de Combate
            </h2>
            <p className="font-body text-lg text-muted-foreground mt-3">
              Cada unidade possui forças e fraquezas. A composição do seu exército define sua estratégia.
            </p>
            <div className="mt-4 h-px w-48 mx-auto border-ornate border-t" />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {units.map((unit, i) => (
              <motion.div
                key={unit.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-gold)]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={unit.image}
                    alt={unit.name}
                    loading="lazy"
                    width={72}
                    height={72}
                    className="w-18 h-18 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{unit.name}</h3>
                    <span className="text-xs font-body uppercase tracking-wider text-primary">{unit.role}</span>
                  </div>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed text-sm">{unit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guildas */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
        <div className="relative max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wider">
              Guildas & <span className="text-primary">Poder</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mt-3">
              Em Dominus, não há rei supremo. O domínio pertence às guildas.
            </p>
            <div className="mt-4 h-px w-48 mx-auto border-ornate border-t" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {guildFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
              >
                <f.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fair Play */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <ShieldOff className="w-14 h-14 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wider">
              Zero <span className="text-primary text-gold-glow">Pay to Win</span>
            </h2>
            <p className="font-body text-lg text-secondary-foreground mt-6 max-w-xl mx-auto leading-relaxed">
              Dominus é construído com uma promessa: nenhum jogador terá vantagem por gastar
              dinheiro real. Itens cosméticos existem, mas poder se conquista com estratégia,
              alianças e dedicação. Todos jogam no mesmo campo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        <motion.div {...fadeUp} className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wider">
            Pronto para <span className="text-primary text-gold-glow">Conquistar</span>?
          </h2>
          <p className="font-body text-lg text-secondary-foreground mt-4">
            Entre agora e escreva seu nome na história de Dominus.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-primary text-primary-foreground font-display text-xl font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[var(--shadow-gold)] hover:scale-105">
              <Sword className="inline w-6 h-6 mr-3 -mt-1" />
              Jogar Agora
            </button>
            <Link
              to="/"
              className="px-10 py-5 border border-primary/40 text-primary font-display text-lg font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-primary/10 hover:border-primary text-center"
            >
              Voltar ao Início
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
