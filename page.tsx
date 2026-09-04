import {
  ArrowRight,
  CalendarCheck,
  Check,
  Clock3,
  Camera,
  MapPin,
  MessageCircle,
  Scissors,
  Sparkles,
  Star,
  UserRound,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const dynamic = 'force-static';

const whatsappHref =
  'https://wa.me/5521997753423?text=Ol%C3%A1%21%20Encontrei%20a%20Conix%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const asset = (path: string) => `${basePath}${path}`;

function Logo() {
  return (
    <a href="#inicio" className="brand" aria-label="Conix Barbearia — início">
      <span className="brand-bars" aria-hidden="true"><i /><i /><i /></span>
      <span>Conix</span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="inicio">
      <header className="site-header">
        <div className="shell header-inner">
          <Logo />
          <nav aria-label="Navegação principal">
            <a href="#servicos">Serviços</a>
            <a href="#galeria">Galeria</a>
            <a href="#equipe">Barbeiros</a>
            <a href="#localizacao">Localização</a>
          </nav>
          <Button nativeButton={false} className="cta-button header-cta" render={<a href={whatsappHref} target="_blank" rel="noreferrer" />}>Agendar horário</Button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src={asset('/hero-conix.png')} alt="Barbeiro finalizando um corte masculino em ambiente contemporâneo" />
        <div className="hero-shade" />
        <div className="shell hero-content">
          <p className="eyebrow"><span /> Conix Barbearia · Barra World</p>
          <h1 id="hero-title">Seu corte,<br /><em>do seu jeito.</em></h1>
          <p className="hero-copy">Cortes, barba e cuidado para todas as idades, com atendimento próximo e sem complicação.</p>
          <div className="hero-actions">
            <Button nativeButton={false} className="cta-button hero-primary" render={<a href={whatsappHref} target="_blank" rel="noreferrer" />}>Agendar pelo WhatsApp <ArrowRight /></Button>
            <Button nativeButton={false} variant="outline" className="hero-secondary" render={<a href="#servicos" />}>Conhecer os serviços</Button>
          </div>
          <p className="trust"><Users aria-hidden="true" /> Atendimento para adultos e crianças.</p>
        </div>
      </section>

      <section className="benefits" aria-label="Diferenciais da Conix">
        <div className="shell benefits-grid">
          <div><Scissors /><span>Profissionais<br /><strong>experientes</strong></span></div>
          <div><CalendarCheck /><span>Atendimento com<br /><strong>hora marcada</strong></span></div>
          <div><Users /><span>Adultos e<br /><strong>crianças</strong></span></div>
          <div><MapPin /><span>No Barra World<br /><strong>Setor Japão</strong></span></div>
        </div>
      </section>

      <section id="servicos" className="preview-section shell">
        <p className="eyebrow dark"><span /> Corte, barba e cuidado</p>
        <h2>O essencial, bem feito.</h2>
        <p>Serviços pensados para encaixar na sua rotina — com atenção aos detalhes do começo ao fim.</p>
        <div className="services-grid">
          {services.map(({ name, text, icon: Icon }, index) => (
            <article className="service-card" key={name}>
              <div className="service-top"><span>0{index + 1}</span><Icon aria-hidden="true" /></div>
              <h3>{name}</h3>
              <p>{text}</p>
              <div className="service-price">Consulte o valor</div>
            </article>
          ))}
        </div>
        <Button nativeButton={false} className="cta-button section-cta" render={<a href={whatsappHref} target="_blank" rel="noreferrer" />}>Escolher serviço e agendar <ArrowRight /></Button>
      </section>

      <section id="galeria" className="gallery-section">
        <div className="shell gallery-heading">
          <div>
            <p className="eyebrow"><span /> Trabalhos recentes</p>
            <h2>Resultado que<br /><em>fala por si.</em></h2>
          </div>
          <p>Conheça alguns dos cortes que já passaram pelas cadeiras da Conix. Fotos extraídas do perfil da barbearia.</p>
        </div>
        <div className="shell gallery-grid" aria-label="Galeria de cortes da Conix">
          <figure className="gallery-tile">
            <img src={asset('/trabalho-corte.png')} alt="Barbeiro realizando degradê em corte masculino" />
            <figcaption>Corte & acabamento</figcaption>
          </figure>
          <figure className="gallery-tile">
            <img src={asset('/trabalho-barba.png')} alt="Cliente com corte clássico e barba cheia alinhada" />
            <figcaption>Barba no detalhe</figcaption>
          </figure>
          <figure className="gallery-tile">
            <img src={asset('/trabalho-infantil.png')} alt="Corte infantil platinado com desenho lateral" />
            <figcaption>Para todas as idades</figcaption>
          </figure>
        </div>
        <div className="shell instagram-row">
          <p><Camera /> Acompanhe os próximos resultados no Instagram</p>
          <a href="https://www.instagram.com/conixbarbearia/" target="_blank" rel="noreferrer">@conixbarbearia <ArrowRight /></a>
        </div>
      </section>

      <section id="equipe" className="team-section shell">
        <div className="section-heading-row">
          <div><p className="eyebrow dark"><span /> Nossa equipe</p><h2>Quem cuida<br />do seu visual.</h2></div>
          <p>Mais do que escolher um corte, você escolhe com quem se sente à vontade. Apresente aqui cada profissional da Conix.</p>
        </div>
        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.number}>
              <div className="team-photo"><img src={asset(member.image)} alt={`Retrato ilustrativo de ${member.name}, profissional fictício`} /></div>
              <div className="team-content"><span className="team-number">{member.number} · Exemplo fictício</span><h3>{member.name}</h3><strong>{member.specialty}</strong><p>{member.note}</p><a href={whatsappHref} target="_blank" rel="noreferrer">Agendar com a equipe <ArrowRight /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="reviews-section">
        <div className="shell reviews-wrap">
          <div className="reviews-intro"><p className="eyebrow"><span /> Avaliações</p><h2>Quem vem,<br /><em>recomenda.</em></h2><p>Este espaço está preparado para receber avaliações reais dos clientes da Conix.</p></div>
          <div className="review-placeholder" aria-label="Espaço reservado para avaliação real">
            <div className="stars" aria-hidden="true">{Array.from({ length: 5 }).map((_, index) => <Star key={index} />)}</div>
            <blockquote>“Depoimento real de cliente será inserido aqui após a confirmação da barbearia.”</blockquote>
            <footer><span>AV</span><div><strong>Avaliação verificada</strong><small>Conteúdo provisório</small></div></footer>
          </div>
        </div>
      </section>

      <section id="localizacao" className="location-section shell">
        <div className="location-card">
          <div className="location-copy">
            <p className="eyebrow dark"><span /> Onde estamos</p>
            <h2>No Barra World.<br />Perto de você.</h2>
            <p className="address"><MapPin /> <span>Av. Alfredo Balthazar da Silveira, 580<br /><strong>Loja 107C — Setor Japão</strong><br />Barra World · Rio de Janeiro</span></p>
            <p className="hours"><Clock3 /> <span><strong>Horário de funcionamento</strong><br />A confirmar com a barbearia</span></p>
            <div className="location-actions">
              <Button nativeButton={false} variant="outline" className="map-button" render={<a href="https://www.google.com/maps/search/?api=1&query=Av.%20Alfredo%20Balthazar%20da%20Silveira%20580%20Barra%20World" target="_blank" rel="noreferrer" />}>Abrir no Google Maps</Button>
              <Button nativeButton={false} className="cta-button" render={<a href={whatsappHref} target="_blank" rel="noreferrer" />}>Agendar antes de ir</Button>
            </div>
          </div>
          <iframe className="map-frame" title="Localização da Conix Barbearia no Barra World" src="https://www.google.com/maps?q=Av.%20Alfredo%20Balthazar%20da%20Silveira%20580%20Barra%20World&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <div><p className="eyebrow dark"><span /> Pronto para mudar?</p><h2>Seu próximo corte<br />começa aqui.</h2></div>
          <div><p>Escolha o melhor horário e fale diretamente com a nossa equipe.</p><Button nativeButton={false} className="final-button" render={<a href={whatsappHref} target="_blank" rel="noreferrer" />}>Agendar pelo WhatsApp <ArrowRight /></Button><small>Resposta rápida durante o horário de funcionamento.</small></div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-main">
          <div><Logo /><p>Corte, barba e cuidado para todas as idades.</p></div>
          <div><strong>Visite</strong><p>Barra World · Loja 107C<br />Setor Japão · Rio de Janeiro</p></div>
          <div><strong>Fale com a gente</strong><a href="tel:+5521997753423">(21) 99775-3423</a><a href="https://www.instagram.com/conixbarbearia/" target="_blank" rel="noreferrer">@conixbarbearia</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Conix Barbearia</span><span>Feito para chegar mais perto.</span></div>
      </footer>

      <a className="floating-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp"><MessageCircle /><span>Agendar</span></a>
    </main>
  );
}
const services = [
  { name: 'Corte masculino', text: 'Do clássico ao atual, com acabamento que respeita o seu estilo.', icon: Scissors },
  { name: 'Barba', text: 'Contorno, alinhamento e cuidado para renovar o visual.', icon: Sparkles },
  { name: 'Corte + barba', text: 'O cuidado completo, resolvido em uma única visita.', icon: Check },
  { name: 'Corte infantil', text: 'Atendimento tranquilo, paciente e confortável para os pequenos.', icon: Users },
  { name: 'Acabamento', text: 'Pezinho e detalhes em dia para manter o corte alinhado.', icon: UserRound },
];

const team = [
  { number: '01', name: 'Rafael', image: '/barbeiro-ficticio-01.png', specialty: 'Cortes e acabamentos', note: 'Perfil demonstrativo para visualizar a apresentação da equipe.' },
  { number: '02', name: 'Diego', image: '/barbeiro-ficticio-02.png', specialty: 'Barba e estilo', note: 'Perfil demonstrativo para visualizar a apresentação da equipe.' },
  { number: '03', name: 'Lucas', image: '/barbeiro-ficticio-03.png', specialty: 'Adultos e crianças', note: 'Perfil demonstrativo para visualizar a apresentação da equipe.' },
];
